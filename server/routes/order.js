import express from "express";
import { createOrder, getUserOrders } from "../Order/orderController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Route to place a new order
router.post("/orders", verifyToken, createOrder);
router.get("/orders/user/:userId", verifyToken, getUserOrders);

export default router;
