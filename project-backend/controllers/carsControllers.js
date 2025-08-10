import Car from "../models/cars.js"
import { isAdmin } from "./userControllers.js";

export async function savecar(req, res) {

    if(req.user == null){
        res.json({
            message:"User not found"
        })
        return
    }

    let carId = "C00001"

    const lastcar = await Car.find().sort({date: -1}).limit(1);

    if(lastcar.length > 0){
        
        const lastCarId = lastcar[0].carId;

        const lastCarNumberString = lastCarId.replace("C", "");
        const lastCarNumber = parseInt(lastCarNumberString);
        const newCarNumber = lastCarNumber + 1;
        const newCarNumberString = String(newCarNumber).padStart(5, "0");
        carId = "C" + newCarNumberString;

    }

    try{

        const car = new Car({
            carId:carId,
            email:req.user.email,
            brand:req.body.brand,
            model:req.body.model,
            year:req.body.year,
            color:req.body.color,
            price:req.body.price,
            images:req.body.images,

        })

        const savedCar = await car.save();
        res.json({
            message:"Car saved successfully",
          
        })

    }catch(error){
        res.json({
            message:"Error saving car",
            error:error.message,
        })
    }

        
      
}

export async function getCars(req, res) {
    try {
        const cars = await Car.find({ isAvailable: true });

        // ✅ Respond with array directly
        res.json(cars);
    } catch (error) {
        // ✅ Use proper status code for errors
        res.status(500).json({
            message: "Error getting cars",
            error: error.message,
        });
    }
}

export async function getCarsAdmin(req, res) {
    try {
        const cars = await Car.find({ status: "approved" });

        // ✅ Respond with array directly
        res.json(cars);
    } catch (error) {
        // ✅ Use proper status code for errors
        res.status(500).json({
            message: "Error getting cars",
            error: error.message,
        });
    }
}


export async function getCarByEmail(req,res){

    const email = req.params.email;

    try{

        const cars = await Car.find({email:email});

        res.json(cars);

    }catch(error){
        res.json({
            message:"Error getting cars",
            error:error.message,
        })
    }
}

export async function updateCar(req,res){

    try{

        await Car.updateOne({carId:req.params.carId},req.body);

        res.json({
            message:"Car updated successfully",
        })

    }catch(error){
        res.json({
            message:"Error updating car",
            error:error.message,
        })
    }

}

export async function deletecar(req,res){

    try{

        await Car.deleteOne({carId:req.params.carId});

        res.json({
            message:"Car deleted successfully",
        })

    }catch(error){
        res.json({
            message:"Error deleting car",
            error:error.message,
        })
    }
}

export async function getCarById(req,res){

    try{

        const carId = req.params.carId;
        const car = await Car.findOne({carId:carId});

        res.json(car);

    }catch(error){
        res.json({
            message:"Error getting car",
            error:error.message,
        })
    }
}

export async function getPendingCars(req,res){

    try{

        const cars = await Car.find({status : "Pending"});

        res.json(cars);

    }catch(error){
        res.json({
            message:"Error getting cars",
            error:error.message,
        })
    }
}

export async function getAprovedCars(req,res){

    try{

        const cars = await Car.find({status : "approved", isAvailable : true});

        res.json(cars);
        

    }catch(error){
        res.json({
            message:"Error getting cars",
            error:error.message,
        })
    }
}

export async function approvedCar(req,res){

    if(!isAdmin(req)){
        res.json({
            message:"You are not authorized to perform this action"
        })
        return
    }

    try {

        await Car.updateOne({carId:req.params.carId},{status:"approved"});

        res.json({
            message:"Car approved successfully",
        })

    } catch (error) {
        res.json({
            message:"Error approving car",
            error:error.message,
        })
    }
}

export async function RejectCar(req,res){

    if(!isAdmin(req)){
        res.json({
            message:"You are not authorized to perform this action"
        })
        return
    }

    try {

        await Car.updateOne({carId:req.params.carId},{status:"Rejected"});

        res.json({
            message:"Car Rejected successfully",
        })

    } catch (error) {
        res.json({
            message:"Error approving car",
            error:error.message,
        })
    }
}