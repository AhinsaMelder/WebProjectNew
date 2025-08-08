import { model } from "mongoose";
import Rental from "../models/rental.js";

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
    model: req.body.model,
    brand: req.body.brand,
    image : req.body.image,

});

const craeterental = await rental.save();
res.json({
    message: "Rental created successfully",
});

    
}