import axios, { AxiosResponse } from "axios";
import { transactionsRef } from "../db";
import { Transaction } from "@prisma/client";
import dayjs from "dayjs";

class MonobankService {
  async test() {
    const data = await transactionsRef.findMany({
      where: { transactionAmount: { gt: 0 } },
      orderBy: { transactionTime: "desc" },
    });
    return data.map((el) => ({
      ...el,
      transactionAmount: el.transactionAmount / 100,
      transactionTime: dayjs(el.transactionTime * 1000).format("YYYY-MM-DD"),
    }));
  }
}

export const monobankService = new MonobankService();
