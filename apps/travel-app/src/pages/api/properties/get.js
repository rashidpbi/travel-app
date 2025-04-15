import mongoose from "mongoose";
import Property from "../../../lib/models/property";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await mongoose.connect(process.env.MONDODB_URI);

      const newProperty = await Property.find({});

      return res.status(201).json({ properties: newProperty });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "internal server error", error: error.message });
    } finally {
      await mongoose.connection.close();
    }
  }
}
