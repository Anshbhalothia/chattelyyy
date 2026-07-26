import jwt from "jsonwebtoken";

const genToken=async(id)=>{
    try {
        const token=jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
        return token;
        
    } catch (error) {
        console.log(error,"-> token error");
        
    }
}
export default genToken;