import { Router } from 'express';
import passengersRouter from './passengersRouter.js';
import citiesRouter from './citiesRouter.js';
import flightsRouter from './flightsRouter.js';

const router = Router();
router.use(passengersRouter);
router.use(citiesRouter);
router.use(flightsRouter);

export default router;