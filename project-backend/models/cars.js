import mongoose from 'mongoose';

const carschema=mongoose.Schema({
      
    carId:{
        type :String,
        required:true,
        unique:true,
     },
     email:{
        type :String,
        required:true,
        unique:true,
     },
    brand :{
        type :String,
        required:true,
     },
     model :{
        type :String,
        required:true,
     },
     year :{
        type :String,
        required:true,
     },
     color :{
        type :String,
        required:true,
     },
     price :{
        type :Number,
        required:true,
     },
     status:{
        type :String,
        required:true,
        default :"Pending",
     },
     date:{
        type :Date,
        default:Date.now
     },
     isAvailable :{
        type :Boolean,
        required:true,
        default :true,
     },

     images:[
        {
            type :String,
            required:true,
        }
     ]
     
})
   const Car= mongoose.model("car",carschema);
  export default Car;