import { Router } from "express";
import { monobankRouter } from "./monobank/router";

export const globalRouter = Router();

globalRouter.use("/monobank", monobankRouter);
