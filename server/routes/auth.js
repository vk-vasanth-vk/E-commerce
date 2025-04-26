import express from "express";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

// @route   POST /api/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

export default router;
