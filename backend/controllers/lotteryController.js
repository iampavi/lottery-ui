import Result from "../models/Result.js";


export const addLotteryResult = async (req, res) => {
  try {
    const { ticketNumber, lottery, date, prize, prizeType } = req.body;

    const newResult = new Result({
      ticketNumber: ticketNumber.trim().toUpperCase(),
      lottery: lottery.trim().toLowerCase(),
      date,
      prize,
      prizeType
    });

    await newResult.save();

    res.status(201).json({ message: "Result added successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const checkResult = async (req, res) => {
  try {
    let { ticketNumber, lottery, date } = req.body;

    console.log("Incoming:", req.body);

    // 🔥 normalize everything
    ticketNumber = ticketNumber.trim().toUpperCase();
    lottery = lottery.trim().toLowerCase();
    date = date.trim();

    console.log("Searching for:", {
      ticketNumber,
      lottery,
      date
    });

const result = await Result.findOne({
  ticketNumber: { $regex: `^${ticketNumber}$`, $options: "i" },
  lottery,
  date
});

    console.log("FOUND:", result);

    if (!result) {
      return res.status(404).json({ message: "Not a winning ticket" });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};