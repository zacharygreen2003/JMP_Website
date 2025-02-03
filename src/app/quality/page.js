import React from "react";
import Information from "@/components/about/Information";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      {/* <h1 className="text-3xl font-bold">Quality</h1> */}
      <Information />
    </div>
  );
};

export default page;
