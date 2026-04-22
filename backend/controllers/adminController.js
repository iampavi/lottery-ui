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