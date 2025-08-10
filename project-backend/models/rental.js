import mongoose from "mongoose";

const rentalSchema = mongoose.Schema({

    rental_id:{
        type: String,
        required: true,
        unique: true
    },
     email :{
        type :String,
        required:true,
     },

     name :{
        type :String,
        required:true,
     },

     nic :{
        type :String,
        required:true,
     },

     phone :{
        type :String,
        required:true,
     },

     address :{
        type :String,
        required:true,
     },

     startDate :{
        type :Date,
        required:true,
     },

     endDate :{
        type :Date,
        required:true,
     },

     total :{
        type :Number,
        required:true,
     },

     carId :{
        type :String,
        required:true,
     },

     carOwnerEmail :{
        type :String,
        required:true,
     },

     model :{
        type :String,
        required:true,
     },
     
     brand :{
        type :String,
        required:true,
     },

     image :{
        type :String,
        required:true,
     },

     date :{
        type :Date,
        default : Date.now
     },
})

const Rental = mongoose.model("Rental", rentalSchema);
export default Rental