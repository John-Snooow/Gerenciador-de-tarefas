import { prisma } from '@/database/prisma';
import { AppError } from '@/utils/AppError';
import { Priority, Status } from '@prisma/client';
import { Request, Response } from 'express';
import z from 'zod';

export class TaskController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      title: z.string().trim().min(3),
      description: z.string().trim().min(3),
      status: z
        .enum([Status.pending, Status.in_progress, Status.completed])
        .default(Status.pending),
      priority: z.enum([Priority.low, Priority.medium, Priority.high]),
      assignedTo: z.uuid(),
      teamId: z.uuid(),
    });

    const { title, description, status, priority, assignedTo, teamId } = bodySchema.parse(
      request.body,
    );

    const task = await prisma.task.create({
      data: { title, description, status, priority, assignedTo, teamId },
    });

    response.status(201).json(task);
  }

  async index(request: Request, response: Response) {
    const tasks = await prisma.task.findMany({
      include: {
        user: { select: { name: true } },
        team: { select: { name: true } },
      },
    });

    return response.json(tasks);
  }

  async show(request: Request, response: Response) {
    const userId = request.user?.id;

    if (!userId) {
      throw new AppError('usuário não autenticado', 401);
    }

    // busca usuario com o team associado, um array de teams
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        TeamMember: {
          include: { team: true }, // inclue array de teams na resposta
        },
      },
    });

    // traz o array com todos ids do team que usuario participa e checa se está vazio
    const teamIds = user!.TeamMember.map((team) => team.teamId);
    if (teamIds.length === 0) {
      return response.status(200).json([]);
    }

    const tasks = await prisma.task.findMany({
      where: {
        teamId: {
          // Filtra pelo campo 'teamId' da Task
          in: teamIds, // Usa 'in' para buscar tarefas que pertencem a qualquer um dos IDs de equipe
        },
      },
      include: {
        user: { select: { name: true } }, // Quem está atribuído à tarefa
        team: { select: { name: true } }, // Detalhes da equipe da tarefa
      },
    });

    return response.json(tasks);
  }

  async update(request: Request, response: Response) {
    const paramSchema = z.object({
      id: z.uuid(),
    });

    const { id } = paramSchema.parse(request.params);
    const userId = request.user?.id;
    const userRole = request.user?.role;

    if (!userId) {
      throw new AppError('usuário não autenticado', 401);
    }

    const task = await prisma.task.findFirst({
      where: { id },
    });

    if (!task) {
      throw new AppError('tarefa não encontrada', 404);
    }

    if (userRole !== 'admin' && task.assignedTo !== userId) {
      throw new AppError('forbidden', 403);
    }

    const bodySchema = z.object({
      status: z.enum([Status.pending, Status.in_progress, Status.completed]),
    });

    const { status } = bodySchema.parse(request.body);

    const updatedTask = await prisma.task.update({
      data: {
        status,
      },
      where: {
        id,
      },
    });

    // salvando histórico
    await prisma.taskHistory.create({
      data: {
        taskId: id,
        changedBy: userId,
        oldStatus: task.status,
        newStatus: updatedTask.status,
      },
    });

    return response.json(updatedTask);
  }

  async remove(request: Request, response: Response) {
    const paramSchema = z.object({
      id: z.uuid(),
    });

    const { id } = paramSchema.parse(request.params);

    await prisma.task.delete({
      where: { id },
    });

    return response.status(204).json();
  }
}
