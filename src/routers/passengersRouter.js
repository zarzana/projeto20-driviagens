import { Router } from 'express';
import { passengerNameValidator } from '../middlewares/passengerValidators.js';
import { addPassenger } from '../controllers/passengerController.js';

const router = Router();

router.post('/passengers', passengerNameValidator, addPassenger);

export default router;