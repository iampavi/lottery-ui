import express from "express";
import { checkResult } from "../controllers/lotteryController.js";

const router = express.Router();

router.post("/check", checkResult);

export default router;