import { SignUpFormData } from "@/types/auth";

export const validateSignUp = (formData: SignUpFormData): string | null => {
  if (!formData.name || !formData.email || !formData.password) {
    return "All fields are required";
  }

  if (!validateEmail(formData.email)) {
    return "Invalid email format";
  }

  return null;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};