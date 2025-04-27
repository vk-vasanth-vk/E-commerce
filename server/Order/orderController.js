import Order from "../models/Order.js";

// Place a new order
export const createOrder = async (req, res) => {
  try {

    const { userId, userName, address, phone, cartItems, totalAmount, cardNumber } = req.body;

    if (!userId, !userName || !address || !phone || !cartItems.length || !totalAmount || !cardNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({
      userId,
      userName,
      address,
      phone,
      cartItems,
      totalAmount,
      cardNumber,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get orders of a specific user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Server error" });
  }
};