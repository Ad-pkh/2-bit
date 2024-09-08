import React from "react";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const LandingPage = () => {
  return (
    <>
      <div className="w-full h-[70vh]  flex  justify-start flex-col text-center">
        <h1 className="text-7xl font-bold mt-20">
          Donate with us. Small
          <br /> Effort make Big changes.
        </h1>
        <div className="w-full gap-10 mt-20 flex item-center justify-center">
          <Link to={"/login"}>
            <Button className="p-5">Login</Button>
          </Link>
          <Link to={"signup"}>
            <Button className="p-5">Signup</Button>
          </Link>
        </div>
      </div>
      <div>
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   width: "100%",
          //   height: "30vh",
          // }}
          className=" flex items-center justify-center p-5"
        >
          <img className="w-full" src="../public/Frame 552.jpg" alt="" />
        </div>

        <div className="mt-10  flex items-center justify-center p-5">
          <img src="../public/Frame 554.jpg" alt="" />
        </div>
        <div className="mt-10  flex items-center justify-center p-5 bg-[#EFF4FB]">
          <img src="../public/Frame 564.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
