import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import User from "../../../lib/models/user";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await mongoose.connect(process.env.MONDODB_URI);
      const body = typeof req.body === "object" ? req.body : await JSON.parse(req.body);

      const { email, password } = body;
      if (!email || !password) {
        return res.status(400).json({ message: "email and passwords are required" });
      }

      const existingUser = await User.findOne({email:email})
      const isValid = await bcrypt.compare(password,existingUser.password)
      if(!isValid){
        return res.status(401).json({message:"invalid credentials"})
      }

      const token = jwt.sign({email:email},process.env.JWT_SECRET,{
        expiresIn:'1h'
      })
      

      return res
        .status(201)
        .json({ token });
    // return res.status(201).json({message:"tested"})

    } catch (error) {
      return res
        .status(500)
        .json({ message: "internal server error", error: error.message });
    }  finally {
      await mongoose.connection.close();
    }
  }
}
