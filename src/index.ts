import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Logger from './helpers/logger.helper';
import errorMiddleware from './middlewares/error.middleware';
import rootRouter from './components/router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5001;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', rootRouter);
app.use(errorMiddleware);
const connectString = process.env.MONGODB_URI;
if (!connectString) {
  Logger.error('connectString invalid');
} else {
  //   mongoose
  //     .connect(connectString)
  //     .then(() => Logger.info('Database connect successfully! '))
  //     .catch((err) => Logger.error(err));
}

app.listen(port, () => {
  Logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
