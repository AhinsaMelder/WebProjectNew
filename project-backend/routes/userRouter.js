import express from 'express';
import { login, saveuser } from '../controllers/userControllers.js';

const userRouter = express.Router();
userRouter.post("/signup" ,saveuser)
userRouter.post("/login",login)

export default userRouter