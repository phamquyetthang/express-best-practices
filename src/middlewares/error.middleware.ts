import { NextFunction, Request, Response } from 'express';
import HttpException from '../helpers/error.helper';
import Logger from '../helpers/logger.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  const status: number = error.status || 500;
  const code = error.error.code;
  const message: string = error.error.message;

  Logger.error(`[ERROR]: status: ${status},code: ${code}, mess : ${message}`);
  res.status(status).json({
    code: code,
    message: message,
  });
};

export default errorMiddleware;
