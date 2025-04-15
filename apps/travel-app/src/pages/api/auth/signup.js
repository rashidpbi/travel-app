import mongoose from "mongoose";
import user from "../../../lib/models/user";
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await mongoose.connect(process.env.MONDODB_URI);
      const body = typeof req.body === "object" ? req.body : await JSON.parse(req.body);
      const { email, password } = body;
      if (!email || !password) {
        return res.status(400).json({ message: "email and password are required" });
      }
      const hashedPassword = await bcrypt.hash(password,10) 

      const newUser = new user({ email, password:hashedPassword });
      await newUser.save();

      return res
        .status(201)
        .json({ message: "user added", id: newUser._id });
    

    } catch (error) {
      return res
        .status(500)
        .json({ message: "internal server error", error: error.message });
    }  finally {
      await mongoose.connection.close();
    }
  }
}
