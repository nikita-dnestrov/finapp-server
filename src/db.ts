import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const transactionsRef = prisma.transaction;
