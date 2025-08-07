import express from 'express';
import { getAllusers, login, saveuser } from '../controllers/userControllers.js';

const userRouter = express.Router();
userRouter.post("/signup" ,saveuser)
userRouter.post("/login",login)
userRouter.get("/getuser",getAllusers)

export default userRouter