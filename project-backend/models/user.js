import mongoose from 'mongoose';

const userschema=mongoose.Schema({
        email :{
            type :String,
            required:true,
            unique:true,
         },
        firstName:{
            type :String,
            required:true,
         },
         lastName:{
            type :String,
            required:true,
         },
         password :{
            type :String,
            required:true,
         },
        role :{
              type :String,
              required:true,
              default :"customer",
        },
        isBlocked :{
            type : Boolean,
            required : true,
            default : false,
        },

});

const User =mongoose.model("User",userschema);
export default User;