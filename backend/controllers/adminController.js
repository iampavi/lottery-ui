import Result from "../models/Result.js";
import jwt from "jsonwebtoken";

export const uploadResult = async (req, res) => {
  try {
    const { ticketNumber, lottery, date, prize, prizeType } = req.body;

    const newResult = new Result({
      ticketNumber,
      lottery,
      date,
      prize,
      prizeType,
    });

    await newResult.save();

    res.json({ success: true, message: "Result added" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123456") {
    const token = jwt.sign({ role: "admin" }, "SECRET_KEY", {
      expiresIn: "1d",
    });

    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};
export const getAllResults = async (req, res) => {
  const results = await Result.find().sort({ date: -1 });
  res.json(results);
};

export const deleteResult = async (req, res) => {
  await Result.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const updateResult = async (req, res) => {
  const updated = await Result.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};