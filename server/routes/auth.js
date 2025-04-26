import express from "express";
import { registerUser, loginUser } from "../User/authController.js";

const router = express.Router();

// @route   POST /api/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

// @route   POST /api/login
// @desc    Login and get JWT token
// @access  Public
router.post("/login", loginUser);

export default router;

