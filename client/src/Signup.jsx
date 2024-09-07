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
import { signup } from "./services/AuthService";
import { SelectItem } from "./components/ui/select";
// import { register } from "../services/users";
// import toast from "react-hot-toast";
// import { getToken } from "@/utils/token";

export default function Signup() {
  // const navigate = useNavigate();
  // const registrationForm = useRef();

  const [role,setRole]=useState("")
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      
    
      const { data } = await signup()
      if (data) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (e) {

      setError(error);
      toast.error(error);
    } finally {
      setTimeout(() => {
        setError("");
        setMessage("");
      }, 1000);
    }
  };

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
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="grid grid-cols-0.5 ">
              <div className="grid gap-2 w-full">
                <Label htmlFor="first-name">Name</Label>
                <Input name="name" placeholder="Sanish Tamang" required onChange={((e)=>(e.target.value))}/>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={((e)=>(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">role</Label>
              <Input name="role" type="text" onChange={((e)=>(e.target.value))} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <select
              onChange={((e)=>(e.target.value))}
              >
                <SelectItem>Donar</SelectItem>
                <SelectItem>organization</SelectItem>
              </select>
              {/* <Input name="password" type="password" onChange={((e)=>(e.target.value))} /> */}
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
