import express from "express";
import { createOrder, getUserOrders } from "../Order/orderController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Route to place a new order
router.post("/orders", createOrder, verifyToken);
router.get("/orders/user/:userId", getUserOrders, verifyToken);

export default router;
