import React from "react";
import Banner from "@/components/Banner";
import Applications from "@/components/applications/Applications";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Applications" />
      <Applications />
    </div>
  );
};

export default page;
