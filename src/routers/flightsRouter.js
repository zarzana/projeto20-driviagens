import { Router } from 'express';
import { flightValidator } from '../middlewares/flightsValidators.js';
import { addFlight } from '../controllers/flightController.js';

const router = Router();

router.post('/flights', flightValidator, addFlight);

export default router;