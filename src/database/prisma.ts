import { PrismaClient } from '@prisma/client';

// Cria um tipo personalizado para permitir adicionar prisma no objeto global
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

// Garante que será usada apenas uma instância de PrismaClient
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? [] : ['query'],
  });

// Em ambiente de desenvolvimento, armazena a instância no objeto global
// Isso evita recriações em cada reload
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
