import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {

    const { userName, address, phone, cartItems, totalAmount, cardNumber } = req.body;

    if (!userName || !address || !phone || !cartItems.length || !totalAmount || !cardNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({
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
