import { transactionsRef } from "../db";

class TransactionService {
  async getTransactions(from: number, to: number, limit: number, offset: number) {
    const count = await transactionsRef.count({
      where: { transactionTime: { gte: from, lte: to } },
    });

    const result = await transactionsRef.findMany({
      where: { transactionTime: { gte: from, lte: to } },
      skip: offset,
      take: limit,
    });

    return { count, result };
  }
}

export const transactionService = new TransactionService();
