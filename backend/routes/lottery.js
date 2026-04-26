import express from "express";
import { checkResult } from "../controllers/lotteryController.js";
import { protect } from "../middleware/auth.js";
import { adminOnly } from "../middleware/Admin.js";
import { addLotteryResult } from "../controllers/lotteryController.js";
import { getAllResults, deleteResult, updateResult } from "../controllers/adminController.js";

const router = express.Router();

router.post("/check", checkResult);
// ✅ ONLY ADMIN CAN ADD RESULT
router.post("/add", protect, adminOnly, addLotteryResult);
router.get("/all", protect, adminOnly, getAllResults);
router.delete("/:id", protect, adminOnly, deleteResult);
router.put("/:id", protect, adminOnly, updateResult);
// 🔥 GET ALL RESULTS (ADMIN)
router.get("/all", protect, adminOnly, async (req, res) => {
  try {
    const results = await Result.find().sort({ date: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Error fetching results" });
  }
});
export default router;