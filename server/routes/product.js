import express from "express";
import { getAllProducts, getProductById, getProductByCategory } from "../Product/productController.js";

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/products", getAllProducts);

// @route   GET /api/products/:id
// @desc    Get a single product
// @access  Public
router.get("/products/:id", getProductById);

router.get("/products/category/:category", getProductByCategory);

export default router;