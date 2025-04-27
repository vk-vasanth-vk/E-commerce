import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  cartItems: [
    {
      id: { type: String },
      name: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    }
  ],
  totalAmount: { type: Number, required: true },
  cardNumber: { type: String, required: true },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;
