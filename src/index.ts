import express from "express";

import "express-async-errors";
import { errorHandler } from "./utils/error-handler";
import { globalRouter } from "./global-router";
import morgan from "morgan";

import { Transaction } from "@prisma/client";
const { setIntervalAsync } = require("set-interval-async");
import dayjs from "dayjs";
import axios, { AxiosResponse } from "axios";
import { transactionsRef, prisma } from "./db";

const app = express();

app.use(morgan("dev"));
app.set("trust proxy", true);
app.use(express.json());
app.use(errorHandler);

app.use("/api", globalRouter);

app.listen(3000, () => console.log("Up on 3000!"));
