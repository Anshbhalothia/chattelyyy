import express from "express";
import { login, signUp,signOut} from "../controller/auth.controller.js";
export const authRouter= express.Router()


authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.get("/logout",signOut)


export default authRouter;

