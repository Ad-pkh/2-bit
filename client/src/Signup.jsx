import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
// import { register } from "../services/users";
// import toast from "react-hot-toast";
// import { getToken } from "@/utils/token";

export default function Signup() {
  // const navigate = useNavigate();
  // const registrationForm = useRef();

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();

  //     const form = registrationForm.current;
  //     const formData = new FormData(form);
  //     const { data } = await register(formData);
  //     if (data) {
  //       setMessage(data.data.message);
  //       toast.success(data.data.message);
  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 3000);
  //     }
  //   } catch (e) {
  //     const error = e?.response?.data?.msg.includes("E11000")
  //       ? "Email is already in use"
  //       : e?.response?.data?.msg;

  //     setError(error);
  //     toast.error(error);
  //   } finally {
  //     setTimeout(() => {
  //       setError("");
  //       setMessage("");
  //     }, 1000);
  //   }
  // };

  // useEffect(() => {
  //   const token = getToken();
  //   if (token) {
  //     navigate("/");
  //   }
  // });
  return (
    <div className="bg-zinc-100 h-screen flex items-center">
      <Card className="mx-auto max-w-sm">
        {/* {error && <Toast msg={error} />} */}
        {/* {message && <Toast msg={message} />} */}
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="grid gap-3"
            // ref={registrationForm}
            // onSubmit={(e) => handleSubmit(e)}
          >
            <div className="grid grid-cols-0.5 ">
              <div className="grid gap-2 w-full">
                <Label htmlFor="first-name">Name</Label>
                <Input name="name" placeholder="Sanish Tamang" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
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
