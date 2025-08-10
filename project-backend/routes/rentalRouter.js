import express from 'express';
import { createrental, getOrdersFromBuyers, getOrdersFromSellers, getrental } from '../controllers/rentalController.js';

const rentalRouter = express.Router();

rentalRouter.post("/save",createrental)
rentalRouter.get("/getrental",getrental);
rentalRouter.get("/getrentalfromBuyers/:email",getOrdersFromBuyers);
rentalRouter.get("/getrentalfromSellers/:email",getOrdersFromSellers);


export default rentalRouter;