import bcrypt from "bcryptjs";
import User from "../models/User.js";

export class UserService {
  async createUser(userData) {
    const { name, email, password } = userData;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email already registered.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    return await newUser.save();
  }

  async loginUser(userData) {
    const { email, password } = userData;

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("No user found!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password!");
    }

    return isPasswordValid;
  }
}