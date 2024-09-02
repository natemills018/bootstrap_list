import { Router } from 'express';
import TodosRouter from './todos';

const router = Router();

router.use('/todos', TodosRouter);

export default router;