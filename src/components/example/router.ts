import { Router } from 'express';
import { getExampleController } from './controllers/example.controller';

const exampleRouter = Router();

exampleRouter.get('/', getExampleController);
export default exampleRouter;
