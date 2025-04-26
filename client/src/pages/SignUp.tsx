import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "@/components/form/SignUpForm";
import { validateSignUp } from "@/utils/validation";
import { registerUser } from "@/api/auth";
import { SignUpFormData } from "@/types/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (formData: SignUpFormData) => {
    setError("");
    setLoading(true);

    const validationError = validateSignUp(formData);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate("/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h2 className="text-center text-2xl font-bold">Create your account</h2>
        <SignUpForm onSubmit={handleSignUp} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default SignUp;
