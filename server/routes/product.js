import express from "express";
import { getAllProducts, getProductById } from "../Product/productController.js";

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/products", getAllProducts);

// @route   GET /api/products/:id
// @desc    Get a single product
// @access  Public
router.get("/products/:id", getProductById);

export default router;