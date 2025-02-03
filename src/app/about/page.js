import WhoWeAre from "@/components/about/WhoWeAre";
import React from "react";
import WhyJM from "@/components/about/WhyJM";
import AboutJMHex from "@/components/about/AboutJMHex";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <div className="w-[65%] md:w-[50%] lg:w-[40%] flex justify-center">
        <AboutJMHex />
      </div>
      <WhoWeAre />
      <WhyJM />
    </div>
  );
};

export default page;
