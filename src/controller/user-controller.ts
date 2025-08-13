import { prisma } from '@/database/prisma';
import { AppError } from '@/utils/AppError';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import z from 'zod';

export class UserController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.email(),
      password: z.string(),
      role: z.enum(['admin', 'member']),
    });

    const { name, email, password, role } = bodySchema.parse(request.body);

    const exists = await prisma.user.findFirst({ where: { email } });
    if (exists) {
      throw new AppError('user with same email already exists', 409);
    }

    const hashedPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    const { password: _pw, ...safeUser } = user;

    return response.status(201).json(safeUser);
  }
}
