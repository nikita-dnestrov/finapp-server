import { Router } from "express";
import { monobankController } from "./controller";

export const monobankRouter = Router();

monobankRouter.get("/test", monobankController.test);
monobankRouter.post("/populate", monobankController.test);
