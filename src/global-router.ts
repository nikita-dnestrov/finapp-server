import { Router } from "express";
import { monobankRouter } from "./monobank/router";
import { transactionRouter } from "./transaction/transaction-router";

export const globalRouter = Router();

globalRouter.use("/monobank", monobankRouter);
globalRouter.use("/transactions", transactionRouter);
