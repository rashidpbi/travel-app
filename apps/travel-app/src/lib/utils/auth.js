import jwt from 'jsonwebtoken'

export function verifyToken(token){
    if(!token){
        throw new Error("no token provided")
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        return decoded
    } catch (error) {
        console.log("error in verification")
        throw new Error("invalid or expired token")
    }
}