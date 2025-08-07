import express from 'express';
import { approvedCar, deletecar, getAprovedCars, getCarByEmail, getCarById, getCars, getPendingCars, RejectCar, savecar, updateCar } from '../controllers/carsControllers.js';

const carRouter=express.Router();

carRouter.post("/savecar",savecar)
carRouter.get("/getcars",getCars)
carRouter.get("/getpendingcars",getPendingCars);
carRouter.get("/getapprovedcars",getAprovedCars);
carRouter.get("/getcarsemail/:email",getCarByEmail);
carRouter.put("/updatecar/:carId",updateCar);
carRouter.delete("/deletecar/:carId",deletecar);
carRouter.get("/getcarid/:carId",getCarById);
carRouter.put("/approvedcar/:carId",approvedCar);
carRouter.put("/rejectcar/:carId",RejectCar);


export default carRouter;