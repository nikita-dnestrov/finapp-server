import { Request, Response } from "express";
import { transactionService } from "./transaction-service";
import { queryToNumber } from "../utils/query-parsers";

class TransactionController {
  async getTransactions(req: Request, res: Response) {
    const { from, to, limit, offset } = queryToNumber(req.query, ["from", "to", "limit", "offset"]);

    const result = await transactionService.getTransactions(from, to, limit, offset);
    res.status(200).json(result);
  }
}

export const transactionController = new TransactionController();
