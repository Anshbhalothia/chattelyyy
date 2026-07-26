import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import genToken from "../config/token.js";



export const signUp=async(req,res)=>{
    
    try {
        const{userName,email,password}=req.body;
        const checkUserByUserName=await User.findOne({userName});
        const checkUserByEmail=await User.findOne({email});
        console.log(checkUserByUserName,checkUserByEmail);
        
        if(checkUserByUserName){
            return res.status(400).json({message:"User already exists with this username"})
        }
        if(checkUserByEmail){
            return res.status(400).json({message:"User already exists with this email"})

        }
        if(password.length <6){
            return res.status(400).json({message:"Password must be at least 6 characters long"})

        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({
            userName,
            email,
            password:hashedPassword
        }) 
        const token=await genToken(newUser._id);
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:1000*60*60*24,
            sameSite:"Strict",
            secure:false
        })
        res.status(201).json({newUser})
        
    } catch (error) {
        res.status(500).json({message:`signup error ${error}`})
    }
 
}

export const login=async(req,res)=>{


    try {
        const{email,password}=req.body;
        
        const user=await User.findOne({email});
        if(! user){
            return res.status(404).json({message:"User not found"})
        
        }
        
    
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        
        const token=await genToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:1000*60*60*24,
            sameSite:"Strict",
            secure:false
        })
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message:`login error ${error}`})
    }

}

export const signOut=async(req,res)=>{
    try {
        
        res.clearCookie("token"
        )
        return res.status(200).json({message:"User logged out"})
        
    } catch (error) {
        return res.status(500).json({message:`logout error ${rror}`})
    
        
    }

}