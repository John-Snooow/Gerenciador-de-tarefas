import { prisma } from '@/database/prisma';
import { Request, Response } from 'express';
import z from 'zod';

export class TeamMemberController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      userId: z.uuid(),
      teamId: z.uuid(),
    });

    const { userId, teamId } = bodySchema.parse(request.body);

    const teamMember = await prisma.teamMember.create({
      data: {
        userId,
        teamId,
      },
    });

    return response.status(201).json(teamMember);
  }

  async show(request: Request, response: Response) {
    const teamMembers = await prisma.teamMember.findMany({
      include: {
        user: {
          select: { name: true },
        },
        team: {
          select: { name: true },
        },
      },
    });

    return response.json(teamMembers);
  }

  async remove(request: Request, response: Response) {
    const paramSchema = z.object({
      id: z.uuid(),
    });

    const { id } = paramSchema.parse(request.params);

    await prisma.teamMember.delete({
      where: {
        id,
      },
    });

    return response.status(204).json();
  }
}
