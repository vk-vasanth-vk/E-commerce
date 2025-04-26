import { UserService } from "./userService.js";
import { validateRegisterForm, validateLoginForm } from "./validateForm.js";
import generateToken from "../utils/generateToken.js";

const userService = new UserService();

// New user registration
export const registerUser = async (req, res) => {
  try {
    // Validation
    const { isValid, errors } = validateRegisterForm(req.body);
    if (!isValid) {
      return res.status(422).json({ errors });
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
      return res.status(409).json({ message: error.message });
    }
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// User login
export const loginUser = async (req, res) => {
  try {
    // Validation
    const { isValid, errors } = validateLoginForm(req.body);
    if (!isValid) {
      return res.status(422).json({ errors });
    }

    // Business Logic
    const user = await userService.loginUser(req.body);

    // Generate Token
    const token = generateToken(user._id);

    // Response
    res.status(200).json({
      message: "User logged in successfully!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
}