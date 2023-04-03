import { Request, Response } from "express";
import { monobankService } from "./service";

class MonobankController {
  async test(req: Request, res: Response) {
    const data = await monobankService.test();
    res.status(200).json(data);
  }
}

export const monobankController = new MonobankController();
