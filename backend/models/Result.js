import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  ticketNumber: String,
  lottery: String,
  date: String,
  prize: Number,
  prizeType: String,
});

export default mongoose.model("Result", resultSchema);