import express from "express";
import { isCurrentUser } from "../controller/user.controller.js";
import isAuth from "../middlewares/isAuth.js";

export const userRouter= express.Router()


userRouter.post("/current",isAuth,isCurrentUser)



export default userRouter;
