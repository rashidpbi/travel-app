import { verifyToken } from "../../lib/utils/auth";

export default function handler(req,res){
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const decoded = verifyToken(token)
        res.status(200).json({success:true,user:decoded})
    } catch (error) {
        res.status(401).json({success:false,message:error.message})
    }
}