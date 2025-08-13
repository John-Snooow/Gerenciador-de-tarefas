import { authConfig } from '@/config/auth-config';
import { prisma } from '@/database/prisma';
import { AppError } from '@/utils/AppError';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import z, { string } from 'zod';

export class SessionController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      email: z.email(),
      password: string(),
    });

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new AppError('Email or password invalid', 401);
    }

    const passwordMached = await compare(password, user.password);

    if (!passwordMached) {
      throw new AppError('Email or password invalid', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: user.role ?? 'member' }, secret, {
      subject: user.id,
      expiresIn: Number(expiresIn),
    });

    const { password: _pw, ...safeUser } = user;

    return response.json({ token, safeUser });
  }
}
