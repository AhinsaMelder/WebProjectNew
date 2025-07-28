import express from 'express';
import { getCars, savecar } from '../controllers/carsControllers.js';

const carRouter=express.Router();

carRouter.post("/savecar",savecar)
carRouter.get("/getcars",getCars)

export default carRouter;