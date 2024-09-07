import React from "react";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-red-400 flex overflow-auto justify-start flex-col text-center">
        <h1 className="text-7xl font-bold mt-40">
          Donate with us. Small
          <br /> Effort make Big changes.
        </h1>
        <div className="w-full gap-10 mt-20 flex item-center justify-center bg-red-400">
          <Link to={"/login"}>
            <Button className="p-5">Login</Button>
          </Link>
          <Link to={"signup"}>
            <Button className="p-5">Signup</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
