import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useSignup from "./hooks/useSignup";
import toast from "react-hot-toast";

export default function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
    address: "",
    role: "",
    username: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await useSignup(data);
      if (res) {
        toast.success(res.message);
        setTimeout(() => {
          // Redirect or do something else, e.g., navigate("/login");
        }, 3000);
      }
    } catch (e) {
      toast.error(e.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="bg-zinc-100 h-screen flex items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-3" onSubmit={handleSubmit}>
            {/* Username input (Name) */}
            <div className="grid gap-2 w-full">
              <Label htmlFor="username">Name</Label>
              <Input
                name="username"
                placeholder="Sanish Tamang"
                required
                onChange={handleChange}
              />
            </div>

            {/* Address input */}
            <div className="grid gap-2 w-full">
              <Label htmlFor="address">Address</Label>
              <Input
                name="address"
                placeholder="Enter your address"
                required
                onChange={handleChange}
              />
            </div>

            {/* Email input */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={handleChange}
              />
            </div>

            {/* Role input (select or text input) */}
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <select
                name="role"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Role</option>
                <option value="Donor">Donor</option>
                <option value="Organization">Organization</option>
              </select>
            </div>

            {/* Password input */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Enter password"
                required
                onChange={handleChange}
              />
            </div>

            {/* Submit button */}
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>

          {/* Login link */}
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
