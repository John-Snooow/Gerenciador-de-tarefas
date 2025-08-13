import { AppError } from '@/utils/AppError';
import { NextFunction, Request, Response } from 'express';

export function verifyUserAuthentication(allowedRoles: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user) {
      throw new AppError('Unauthorized', 401);
    }

    if (!allowedRoles.includes(request.user.role)) {
      throw new AppError('Forbidden: insufficient permissions', 403);
    }

    return next();
  };
}
