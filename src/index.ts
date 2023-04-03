import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import "express-async-errors";
import { errorHandler } from "./utils/error-handler";
import { globalRouter } from "./global-router";
import morgan from "morgan";

const prisma = new PrismaClient();
const app = express();

app.use(morgan("dev"));
app.set("trust proxy", true);
app.use(express.json());
app.use(errorHandler);

app.use("/api", globalRouter);

app.listen(3000, () => console.log("Up on 3000!"));