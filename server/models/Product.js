import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  price: { 
    type: Number, 
    required: true 
  },
  image: { 
    type: String 
  },
  category: { 
    type: String, 
    required: true 
  },
  details: {
    type: String
  },
  stock: { 
    type: Number, 
    default: 10 
  },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
