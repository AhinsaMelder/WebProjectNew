import { model } from "mongoose";
import Rental from "../models/rental.js";
import Car from "../models/cars.js";
import cron from "node-cron";

export async function createrental(req,res){

    if(req.user == null){
        res.json({
            message:"User not found"
        })
        return
    }

    let rental_id = "R00001";
    const lastRental = await Rental.find().sort({ date: -1 }).limit(1);

if (lastRental.length > 0) {
    const lastRentalId = lastRental[0].rental_id;
    const lastRentalNumberString = lastRentalId.replace("R", "");
    const lastRentalNumber = parseInt(lastRentalNumberString);
    const newRentalNumber = lastRentalNumber + 1;
    const newRentalNumberString = String(newRentalNumber).padStart(5, "0");
    rental_id = "R" + newRentalNumberString;
}

const rental = new Rental({
    rental_id: rental_id,
    email: req.user.email,
    name: req.body.name,
    nic: req.body.nic,
    phone: req.body.phone,
    address: req.body.address,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    total : req.body.total,
    carId: req.body.carId,
    carOwnerEmail: req.body.carOwnerEmail,
    model: req.body.model,
    brand: req.body.brand,
    image : req.body.image,

});

const craeterental = await rental.save();
 await Car.updateOne({ carId: req.body.carId }, { $set: { isAvailable: false } });

res.json({
    message: "Rental created successfully",
});

}

export async function getrental(req,res){

    try{

        const rental = await Rental.find({});
        res.json(rental);

    }catch(error){
        res.json({
            message:"Error getting rental",
            error:error.message,
        })
    }

}

export async function getOrdersFromBuyers(req,res){

    const email = req.params.email;

    try{

        const rental = await Rental.find({email:email}).sort({date:-1});
        res.json(rental);

    }catch(error){
        res.json({
            message:"Error getting rental",
            error:error.message,
        })
    }


}

export async function getOrdersFromSellers(req,res){

    const email = req.params.email;

    try{

        const rental = await Rental.find({carOwnerEmail:email}).sort({date:-1});
        res.json(rental);

    }catch(error){
        res.json({
            message:"Error getting rental",
            error:error.message,
        })
    }
}

cron.schedule("0 0 * * *", async () => {
    console.log("Checking for expired rentals...");

    const now = new Date();

    try {
        // Find rentals where endDate has passed
        const expiredRentals = await Rental.find({ endDate: { $lt: now } });

        for (let rental of expiredRentals) {
            await Car.updateOne(
                { carId: rental.carId },
                { $set: { IsActive: true } }
            );
        }

        console.log("Expired rentals processed.");
    } catch (error) {
        console.error("Error updating cars:", error);
    }
});


