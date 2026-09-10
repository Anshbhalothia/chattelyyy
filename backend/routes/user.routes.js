import express from "express";
import { editProfile, isCurrentUser } from "../controller/user.controller.js";
import isAuth from "../middlewares/isAuth.js";
import { upload } from "../middlewares/multer.js";

export const userRouter= express.Router()


userRouter.post("/current",isAuth,isCurrentUser)
userRouter.put("/profile",isAuth,upload.single("image"),editProfile)



export default userRouter;
