import { Prisma, PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const transactionsRef = prisma.transaction;
