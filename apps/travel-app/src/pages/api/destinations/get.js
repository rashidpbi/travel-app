import mongoose from "mongoose";
import Destination from "../../../lib/models/destination";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await mongoose.connect(process.env.MONDODB_URI);

      const newDestinations = await Destination.find({});

      return res.status(201).json({ destinations: newDestinations });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "internal server error", error: error.message });
    } finally {
      await mongoose.connection.close();
    }
  }
}
