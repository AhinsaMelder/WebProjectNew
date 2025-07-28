import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import carRouter from './routes/carRouter.js';


const app= express();

app.use(cors());
app.use(bodyparser.json());

app.use((req,res,next)=>{
    const tokenString = req.header("Authorization");

    if(tokenString){
        const token = tokenString.replace("Bearer ","");

        jwt.verify(token,"secretkey",(err,decoded)=>{
            if(!err){
                req.user = decoded
            }else{
                console.log(err);
            }
            next();
        })
    }else{
        next();
    }
})

mongoose.connect("mongodb+srv://admin:12345@cluster0.ypz4pdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{
    console.log("connect_db");
})
.catch((error)=>{
    console.log(error);
})

app.use("/api/user",userRouter);
app.use("/api/cars",carRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})