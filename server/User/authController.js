import { UserService } from "./userService.js";
import { validateForm } from "./validateForm.js";
import generateToken from "../utils/generateToken.js";

const userService = new UserService();

export const registerUser = async (req, res) => {
  try {
    // Validation
    const { isValid, errors } = validateForm(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }

    // Business Logic
    const newUser = await userService.createUser(req.body);
    
    // Generate Token
    const token = generateToken(newUser._id);

    // Response
    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });

  } catch (error) {
    if (error.message === "Email already registered.") {
      return res.status(400).json({ message: error.message });
    }
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};