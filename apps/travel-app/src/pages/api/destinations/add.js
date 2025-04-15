import mongoose from "mongoose";
import Destination from "../../../lib/models/destination";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await mongoose.connect(process.env.MONDODB_URI);
      const body = typeof req.body === "object" ? req.body : await JSON.parse(req.body);
      const { name, image } = body;
      if (!name || !image) {
        return res.status(400).json({ message: "Name and image are required" });
      }

      const newDestination = new Destination({ name, image });
      await newDestination.save();

      return res
        .status(201)
        .json({ message: "destination added", id: newDestination._id });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "internal server error", error: error.message });
    } finally {
      await mongoose.connection.close();
    }
  }
}
