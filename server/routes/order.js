import express from "express";
import { createOrder } from "../Order/orderController.js";

const router = express.Router();

// Route to place a new order
router.post("/orders", createOrder);

export default router;
