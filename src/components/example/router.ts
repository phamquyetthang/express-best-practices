import { Router } from 'express';
import { getExampleController } from './controllers/example.controller';

const exampleRouter = Router();

exampleRouter.get('/core/', getExampleController);
exampleRouter.get('/feat/', getExampleController);
export default exampleRouter;
