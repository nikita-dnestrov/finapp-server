import axios, { AxiosResponse } from "axios";
import { transactionsRef } from "../db";
import { Transaction } from "@prisma/client";

class MonobankService {
  async test() {
    const { data }: AxiosResponse = await axios.get(
      "https://api.monobank.ua/personal/statement/G1m1U4Cxa1AvIE3iYlrFrw/1678044176/1680549776",
      {
        headers: { "X-Token": "ufYVzv7ScuIyS_SGA3XEJnNVLo_8ie7WUg54bv3_h23c" },
      }
    );

    const mapped = data.map((el: any) => ({
      id: el.id,
      transactionTime: el.time,
      mcc: el.mcc,
      transactionAmount: el.amount,
    })) as Transaction[];

    await transactionsRef.createMany({ data: mapped });
    return data;
  }
}

export const monobankService = new MonobankService();
