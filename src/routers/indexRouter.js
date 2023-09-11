import { Router } from 'express';
import passengersRouter from './passengersRouter.js';

const router = Router();
router.use(passengersRouter);

export default router;