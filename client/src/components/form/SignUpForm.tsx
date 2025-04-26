import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SignUpFormData } from "@/types/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

interface Props {
  onSubmit: (formData: SignUpFormData) => void;
  loading: boolean;
}

export const SignUpForm = ({ onSubmit, loading }: Props) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
    navigate('/');
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" placeholder='Jhon Doe' required value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder='john@example.com' required value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required placeholder="••••••••" value={formData.password} onChange={handleChange} />
        </div>
      </div>

      <div className='flex gap-8'>
        <Button type='button' onClick={handleCancel} variant={'outline'} className='w-full'>
          Cancel
        </Button>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
      </div>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
          Login
        </Link>
      </p>
    </form>
  );
};
