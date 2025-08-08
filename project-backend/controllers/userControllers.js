import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export function saveuser(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        role: req.body.role,
    });

    user
        .save()
        .then(() => {
            res.json({
                message: "User created successfully",
            });
        })
        .catch((error) => {
            res.json({
                message: "Error saving user", 
                error: error.message,
            });
        });
}

export function login(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email:email})
        .then((user)=>{
            if(user == null){
                res.json({
                    message:"User not found"
                })
            }else{

                const isPasswordCorrect = bcrypt.compareSync(password,user.password);
                if(isPasswordCorrect){

                    const token = jwt.sign({

                        email:user.email,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        role:user.role,

                    }, "secretkey"
                )

                res.json({
                    message:"Login successful",
                    token:token,
                    role:user.role,
                    email:user.email,
                    firstName:user.firstName  
                })
                }else{
                    res.json({
                        message:"Password is incorrect"
                    })

                }
            }
        })
} 


export function isAdmin(req){

  if(req.user == null){
    return false;
  }
  if(req.user.role == "admin"){
    return true;
  }
  return false;
}

export async function getAllusers(req,res){

    try{

        const users = await User.find({role: {$in :["customer", "seller"]}});
        res.json(users); 

    }catch(error){
        res.json({
            message:"Error getting users",
            error:error.message,
        })
    }
}

export async function viewdetails(req,res){

    const email = req.params.email;

    try{

        const user = await User.findOne({email:email});
        res.json(user); 

    }catch(error){
        res.json({
            message:"Error getting user",
            error:error.message,
        })
    }

}