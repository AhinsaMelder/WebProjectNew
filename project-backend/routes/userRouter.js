import express from 'express';
import { getAllusers, login, saveuser, UpdateProfile, viewdetails } from '../controllers/userControllers.js';

const userRouter = express.Router();
userRouter.post("/signup" ,saveuser)
userRouter.post("/login",login)
userRouter.get("/getuser",getAllusers)
userRouter.get("/userdeatils/:email",viewdetails);
userRouter.put("/updateprofile/:email",UpdateProfile);


export default userRouter