import { Router } from 'express';
import { travelValidator } from '../middlewares/travelsValidators.js';
import { addTravel } from '../controllers/travelsController.js';

const router = Router();

router.post('/travels', travelValidator, addTravel);

export default router;