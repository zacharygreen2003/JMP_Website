// // "use client"; // Ensures it's a Client Component

// // import React from "react";
// // import { applicationsData } from "@/data/Applications.js";
// // import Slideshow from "../Slideshow";

// // const Applications = () => {
// //   return (
// //     <div className="w-2/3 flex flex-col items-center gap-10"> {/* Added margin */}
// //       {applicationsData.map((section, index) => (
// //         <div key={index} className="text-center w-full">
// //           <h2 className="text-2xl font-bold">{section.title}</h2>
// //           <p className="text-lg">{section.text}</p>
// //           {(section.title === "Clamps and Fastener Applications" || section.title === "Wire Harnesses Applications") && (
// //             <Slideshow images={section.images} />
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Applications;

// // import React from "react";
// // import { applicationsData } from "@/data/Applications.js";
// // import Slideshow from "../Slideshow";
// // import Lifecycle from "../Lifecycle"; // Import Lifecycle Component

// // const Applications = () => {
// //   return (
// //     <div className="w-2/3 flex flex-col items-center gap-10">
// //       {applicationsData.map((section, index) => (
// //         <div key={index} className="text-center w-full">
// //           <h2 className="text-2xl font-bold">{section.title}</h2>
// //           <p className="text-lg">{section.text}</p>
// //           {(section.title === "Clamps and Fastener Applications" || section.title === "Wire Harnesses Applications") && (
// //             <Slideshow images={section.images} />
// //           )}
// //         </div>
// //       ))}

// //       {/* Add Services & Life Cycle Section */}
// //       <div className="w-full text-center">
// //         <Lifecycle />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Applications;

// // import React from "react";
// // import { applicationsData } from "@/data/Applications.js";
// // import Slideshow from "../Slideshow";
// // import Lifecycle from "../Lifecycle"; // Import Lifecycle Component

// // const Applications = () => {
// //   return (
// //     <div className="w-2/3 flex flex-col items-center gap-10">
// //       {applicationsData.map((section, index) => (
// //         <div key={index} className="text-center w-full">
// //           <h2 className="text-2xl font-bold">{section.title}</h2>
// //           <p className="text-lg">{section.text}</p>
// //           {(section.title === "Clamps and Fastener Applications" || section.title === "Wire Harnesses Applications") && (
// //             <Slideshow images={section.images} />
// //           )}
// //         </div>
// //       ))}

// //       {/* Add Services & Life Cycle Section */}
// //       <div className="w-full text-center">
// //         <Lifecycle />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Applications;

// import React from "react";
// import { applicationsData } from "@/data/Applications.js";
// import Slideshow from "../Slideshow";
// import Lifecycle from "../Lifecycle"; // Import Lifecycle Component

// const Applications = () => {
//   return (
//     <div className="w-2/3 flex flex-col items-center gap-10">
//       {applicationsData.map((section, index) => (
//         <div key={index} className="text-center w-full">
//           <h2 className="text-2xl font-bold">{section.title}</h2>
//           <p className="text-lg">{section.text}</p>
//           {(section.title === "Clamps and Fastener Applications" || section.title === "Wire Harnesses Applications") && (
//             <Slideshow images={section.images} />
//           )}
//         </div>
//       ))}

//       {/* Add Animated Life Cycle */}
//       <div className="w-full text-center">
//         <Lifecycle />
//       </div>
//     </div>
//   );
// };

// export default Applications;

import React from "react";
import { applicationsData } from "@/data/Applications.js";
import Slideshow from "../Slideshow";
import Lifecycle from "../Lifecycle"; // Import Lifecycle Component
import Image from "next/image";
import CapabilitiesImage from "@/public/images/Capabilities.webp"; // Import Capabilities Image

const Applications = () => {
  return (
    <div className="w-2/3 flex flex-col items-center gap-10">

      {/* ✅ Other Sections (Clamps, Wire Harnesses, etc.) */}
      {applicationsData.map((section, index) => (
        section.title !== "Capabilities" && (
          <div key={index} className="text-center w-full">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="text-lg">{section.text}</p>

            {/* ✅ Clamps and Wire Harnesses Sections with Slideshows */}
            {(section.title === "Clamps and Fastener Applications" || section.title === "Wire Harnesses Applications") && (
              <Slideshow images={section.images} />
            )}
          </div>
        )
      ))}

      {/* ✅ Keeps Animated Life Cycle Exactly How You Had It */}
      <div className="w-full text-center">
        <Lifecycle />
      </div>

      {/* ✅ Capabilities Section Now at the Very Bottom */}
      {applicationsData.map((section, index) => (
        section.title === "Capabilities" && (
          <div key={index} className="text-center w-full">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="text-lg">{section.text}</p>
            <div className="flex justify-center mt-5">
              <Image
                src={CapabilitiesImage}
                alt="Capabilities"
                width={600}
                height={400}
                className="rounded-md shadow-md object-cover"
              />
            </div>
          </div>
        )
      ))}
      
    </div>
  );
};

export default Applications;
