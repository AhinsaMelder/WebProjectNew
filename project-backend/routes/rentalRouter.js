import express from 'express';
import { createrental } from '../controllers/rentalController.js';

const rentalRouter = express.Router();

rentalRouter.post("/save",createrental)

export default rentalRouter;