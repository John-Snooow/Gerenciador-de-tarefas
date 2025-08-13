import { prisma } from '@/database/prisma';
import { Request, Response } from 'express';
import z, { string } from 'zod';

export class TeamController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: string(),
      description: string(),
    });

    const { name, description } = bodySchema.parse(request.body);
    const team = await prisma.team.create({
      data: {
        name,
        description,
      },
    });

    return response.status(201).json({ team });
  }

  async update(request: Request, response: Response) {
    const paramsSchema = z.object({
      id: z.uuid(),
    });

    const bodySchema = z.object({
      name: string(),
      description: string(),
    });

    const { id } = paramsSchema.parse(request.params);
    const { name, description } = bodySchema.parse(request.body);

    const team = await prisma.team.update({
      data: {
        name,
        description,
      },
      where: {
        id,
      },
    });

    return response.json({ team });
  }
}
