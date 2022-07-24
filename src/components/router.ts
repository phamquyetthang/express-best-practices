import { Router } from 'express';
import exampleRouter from './example/router';

const rootRouter = Router();
rootRouter.use('/example', exampleRouter);

export default rootRouter;
