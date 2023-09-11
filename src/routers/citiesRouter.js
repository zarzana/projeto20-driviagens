import { Router } from 'express';
import { cityNameValidator } from '../middlewares/citiesValidators.js';
import { addCity } from '../controllers/citiesController.js';

const router = Router();

router.post('/cities', cityNameValidator, addCity);

export default router;