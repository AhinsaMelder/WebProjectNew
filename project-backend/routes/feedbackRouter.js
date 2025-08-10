import express from 'express';
import { getfeedback, savefeedback } from '../controllers/feedbackController.js';

const feedbackRouter = express.Router();

feedbackRouter.post("/savefeedbacks/:carId",savefeedback);
feedbackRouter.get("/getfeedback",getfeedback);

export default feedbackRouter;