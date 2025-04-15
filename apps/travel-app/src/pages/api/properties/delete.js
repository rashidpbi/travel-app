import mongoose from "mongoose";
import Property from "../../../lib/models/property";
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      await mongoose.connect(process.env.MONDODB_URI);
      const body = typeof req.body === "object" ? req.body : await JSON.parse(req.body);
      const { _id} = body;
      if (!_id) {
        return res.status(400).json({ message: "id required" });
      }

      const PropertyToBeDeleted = Property.findById(_id)
      await PropertyToBeDeleted.deleteOne({ _id });

      return res
        .status(201)
        .json({ message: "destination deleted", _id });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "internal server error", error: error.message });
    } finally {
      await mongoose.connection.close();
    }
  }
}
