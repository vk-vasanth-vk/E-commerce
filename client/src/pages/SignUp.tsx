import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "@/components/form/SignUpForm";
import { validateSignUp } from "@/utils/validation";
import { registerUser } from "@/api/auth";
import { SignUpFormData } from "@/types/auth";
import { useAuth } from "@/context/AuthContext";
import { getRedirectPath } from "@/utils/redirect";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setToken, setUserDetails } = useAuth();

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
      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if(response.data) {
        setToken(response.data.token);
        setUserDetails(response.data.user);
        
        // Check for redirect path
        const redirectPath = getRedirectPath();
        navigate(redirectPath || '/');
      }

    } catch (err: any) {
      if(err.response?.status === 409) {
        setError("User already exists");
        return;
      }
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h2 className="text-center text-2xl font-bold">Create your account</h2>
        {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
        <SignUpForm onSubmit={handleSignUp} loading={loading} />
      </div>
    </div>
  );
};

export default SignUp;
