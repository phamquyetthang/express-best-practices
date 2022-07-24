import { NextFunction, Request, Response } from 'express';
import HttpException from 'src/helpers/error.helper';

export const getExampleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json('Hello world');
  } catch (error) {
    next(new HttpException(500, { message: String(error) }));
  }
};
