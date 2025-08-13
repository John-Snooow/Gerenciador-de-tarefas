import { prisma } from '@/database/prisma';
import { Request, Response } from 'express';

export class TaskHistoryController {
  async index(request: Request, response: Response) {
    const tasksHistory = await prisma.taskHistory.findMany({
      include: {
        user: { select: { name: true } },
        task: { select: { title: true } },
      },
    });

    return response.json(tasksHistory);
  }
}
