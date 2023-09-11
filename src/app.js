import express from 'express';
import "express-async-errors";
import routers from './routers/indexRouter.js';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(routers);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Application running on port ${port}.`));