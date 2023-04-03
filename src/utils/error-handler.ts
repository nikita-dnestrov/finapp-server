import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};

export const errorCatcher = (cb: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      cb(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
