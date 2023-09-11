import { Router } from 'express';
import passengersRouter from './passengersRouter.js';
import citiesRouter from './citiesRouter.js';

const router = Router();
router.use(passengersRouter);
router.use(citiesRouter);

export default router;