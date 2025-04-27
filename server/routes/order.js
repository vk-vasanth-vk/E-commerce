import express from "express";
import { createOrder, getUserOrders } from "../Order/orderController.js";

const router = express.Router();

// Route to place a new order
router.post("/orders", createOrder);
router.get("/orders/user/:userId", getUserOrders);

export default router;
