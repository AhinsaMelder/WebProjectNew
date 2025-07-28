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