import User from "../models/user.model.js"

export const isCurrentUser=async (req,res)=>{
    try {

        let userId=req.userId
        let user= await User.findById(userId).select("-password")
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        if(user){
            return res.status(200).json(user)                               
        }
        
    } catch (error) {
    console.error("Current User Error:", error);

    return res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack,
    });
}
}
export const editProfile= async (req,res)=>{
    try {
        
    } catch (error) {
        
    }

}