import DonateCard from "@/components/DonateCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Donate = () => {
  return (
    <>
      <div className="px-10 overflow-auto">
        <div className="w-full h-[70vh] p-10 flex items-center justify-center gap-2">
          {/* <h1 className="text-4xl mb-5">Donate Now!</h1> */}

          <div className="w-1/2">
            <img
              className="w-100 h-80"
              src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl">
              Together, we can reduce food waste and feed hungry families. Join
              us in creating a better, more compassionate world—one meal at a
              time.
            </h1>
            <Button className="p-5 mt-4">Explore More!</Button>
          </div>
        </div>
        <div className="w-full h-min  p-4">
          <h1 className="text-4xl mb-5 text-center">Events</h1>

          <div className="flex flex-row flex-wrap gap-5 p-5">
            <DonateCard />
            <div className="mt-5 w-full flex h-10 justify-center items-center">
              <Button className="p-6">Explore more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
