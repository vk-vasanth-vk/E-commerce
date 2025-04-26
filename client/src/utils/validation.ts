import { SignUpFormData } from "@/types/auth";

export const validateSignUp = (formData: SignUpFormData): string | null => {
  if (!formData.name || !formData.email || !formData.password) {
    return "All fields are required";
  }

  if (formData.password !== formData.confirmPassword) {
    return "Passwords do not match";
  }

  return null;
};
