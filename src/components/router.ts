import { Router } from 'express';
/* ROUTER_IMPORT */
import exampleRouter from './example/router';

const rootRouter = Router();
/* ROUTER_LIST */
rootRouter.use('/example', exampleRouter);

export default rootRouter;
