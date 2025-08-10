import express from 'express';
import { savefeedback } from '../controllers/feedbackController.js';

const feedbackRouter = express.Router();

feedbackRouter.post("/savefeedbacks/:carId",savefeedback);

export default feedbackRouter;