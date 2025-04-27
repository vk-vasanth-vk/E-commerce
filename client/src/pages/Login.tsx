import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm, LoginFormData } from "@/components/form/LoginForm";
import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/api/auth";

const Login = () => {
  const navigate = useNavigate();
  const { setToken, setUserDetails } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (formData: LoginFormData) => {
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(formData);

      if (response.data) {
        setToken(response.data.token);
        setUserDetails(response.data.user);
        navigate("/");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-6">Login to your account</h2>
        {error && (
          <div className="text-red-500 text-sm text-center mt-4">{error}</div>
        )}
        <LoginForm onSubmit={handleLogin} loading={loading} />
      </div>
    </div>
  );
};

export default Login;