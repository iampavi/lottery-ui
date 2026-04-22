import Result from "../models/Result.js";

export const checkResult = async (req, res) => {
  try {
    const { ticketNumber, lottery, date } = req.body;

    const result = await Result.findOne({
      ticketNumber,
      lottery,
      date,
    });

    if (result) {
      res.json({ success: true, result });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};