import Product from "../models/Product.js";

export class ProductService {
  async getAllProducts() {
    const products = await Product.findAll();
    return products;
  }
}