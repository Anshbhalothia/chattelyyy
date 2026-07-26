import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
dotenv.config()
const app=express()
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(process.env.PORT,()=>{
    connectDB();
    console.log("MONGO URI:", process.env.MONGODB_URI);
    console.log(`Server is running on port ${process.env.PORT}`);

})