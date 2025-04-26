import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
    loading: boolean;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export const LoginForm = ({ onSubmit, loading }: LoginFormProps) => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleCancel = () => {
        setFormData({
          email: '',
          password: '',
        });
        navigate('/');
      };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <div className='flex gap-8'>
                <Button type='button' onClick={handleCancel} variant={'outline'} className='w-full'>
                    Cancel
                </Button>
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Logging in..." : "Log in"}
                </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign up
                </Link>
            </p>
        </form>
    );
};