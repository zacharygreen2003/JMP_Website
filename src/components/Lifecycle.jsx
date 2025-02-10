// // // // import React from "react";
// // // // import Image from "next/image";
// // // // import { FaArrowRight } from "react-icons/fa"; // Import arrow icons

// // // // // Placeholder logo (Replace with your actual logo)
// // // // import CenterImage from "@/public/images/lineclamps/LineClamp1.webp";

// // // // const lifecycleSteps = [
// // // //   { number: 1, title: "Integration & Test", text: "J&M Products offers engineering support for a range of needs, from basic prototype and test wire harnesses to full bespoke EWIS (Electrical Wiring Interconnection System) solutions." },
// // // //   { number: 2, title: "OEM", text: "J&M Products serves as both an Original Equipment Manufacturer (OEM) and a supplier of components and assemblies to other OEMs." },
// // // //   { number: 3, title: "After Market", text: "J&M Products manufactures and supplies the global Maintenance, Repair, and Overhaul (MRO) market, ensuring high quality and reliability." },
// // // //   { number: 4, title: "PMA", text: "J&M Products holds FAA Parts Manufacturer Approval (PMA), ensuring compliance with aviation safety standards." },
// // // //   { number: 5, title: "Future Expansion", text: "Placeholder for future lifecycle step." }, // Placeholder step
// // // // ];

// // // // const Lifecycle = () => {
// // // //   return (
// // // //     <div className="relative w-full flex flex-col items-center gap-10 py-10">
// // // //       {/* Section Title */}
// // // //       <h2 className="text-3xl font-bold text-center">Services & Life Cycle</h2>

// // // //       {/* Container for Lifecycle Diagram */}
// // // //       <div className="relative w-[500px] h-[500px] flex justify-center items-center">
        
// // // //         {/* Central Image */}
// // // //         <div className="absolute w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-lg z-10">
// // // //           <Image src={CenterImage} alt="Lifecycle Center" className="rounded-full object-cover w-full h-full" />
// // // //         </div>

// // // //         {/* Steps positioned around the center */}
// // // //         {lifecycleSteps.map((step, index) => {
// // // //           const totalSteps = lifecycleSteps.length;
// // // //           const angle = (index / totalSteps) * 2 * Math.PI;
// // // //           const nextAngle = ((index + 1) % totalSteps) / totalSteps * 2 * Math.PI;
// // // //           const radius = 170; // Distance from center

// // // //           const x = Math.cos(angle) * radius;
// // // //           const y = Math.sin(angle) * radius;

// // // //           const arrowX = Math.cos((angle + nextAngle) / 2) * (radius + 30);
// // // //           const arrowY = Math.sin((angle + nextAngle) / 2) * (radius + 30);

// // // //           return (
// // // //             <div 
// // // //               key={step.number} 
// // // //               className="absolute w-40 text-center p-2 flex flex-col items-center"
// // // //               style={{ transform: `translate(${x}px, ${y}px)` }}
// // // //             >
// // // //               {/* Number in a Circle */}
// // // //               <div className="bg-blue-500 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
// // // //                 {step.number}
// // // //               </div>

// // // //               {/* Step Title */}
// // // //               <h3 className="text-md font-semibold mt-2">{step.title}</h3>
              
// // // //               {/* Step Text */}
// // // //               <p className="text-xs text-gray-700">{step.text}</p>

// // // //               {/* Arrow (Now pointing correctly) */}
// // // //               <div
// // // //                 className="absolute text-blue-500 text-3xl"
// // // //                 style={{
// // // //                   transform: `translate(${arrowX}px, ${arrowY}px) rotate(${angle + Math.PI / 2}rad)`,
// // // //                 }}
// // // //               >
// // // //                 <FaArrowRight />
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Lifecycle;

// // // // "use client";

// // // // import React from "react";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import ClampImage from "@/public/images/lineclamps/LineClamp1.webp"; // Temporary logo

// // // // const steps = [
// // // //   { title: "Integration & Test", description: "Engineering support for prototype and test wire harnesses to full bespoke EWIS solutions." },
// // // //   { title: "OEM", description: "Serving as an OEM and producing components and assemblies for other OEMs." },
// // // //   { title: "After Market", description: "Manufacturing and supplying the global MRO market for highest reliability." },
// // // //   { title: "PMA", description: "Holding FAA Parts Manufacturer Approval (PMA) for stringent aviation safety standards." },
// // // // ];

// // // // const Lifecycle = () => {
// // // //   const radius = 180; // Distance from center
// // // //   const duration = 20; // Rotation duration
// // // //   const stepCount = steps.length;

// // // //   return (
// // // //     <div className="relative flex items-center justify-center h-[500px] w-[500px] mx-auto">
// // // //       {/* Center Logo (Perfectly Centered) */}
// // // //       <div className="absolute flex items-center justify-center w-[140px] h-[140px] bg-white rounded-full shadow-lg z-10 overflow-hidden">
// // // //         <Image src={ClampImage} alt="Logo" fill className="rounded-full object-cover" />
// // // //       </div>

// // // //       {/* Steps rotating around the logo */}
// // // //       <motion.div
// // // //         className="absolute w-full h-full flex items-center justify-center"
// // // //         animate={{ rotate: 360 }}
// // // //         transition={{ repeat: Infinity, duration, ease: "linear" }}
// // // //       >
// // // //         {steps.map((step, index) => {
// // // //           const angle = (index / stepCount) * 360;
// // // //           const x = radius * Math.cos((angle * Math.PI) / 180);
// // // //           const y = radius * Math.sin((angle * Math.PI) / 180);

// // // //           return (
// // // //             <motion.div
// // // //               key={index}
// // // //               className="absolute w-40 text-center p-3 bg-white rounded-md shadow-md flex flex-col items-center"
// // // //               style={{
// // // //                 left: `calc(50% + ${x}px)`,
// // // //                 top: `calc(50% + ${y}px)`,
// // // //                 transform: `translate(-50%, -50%)`,
// // // //               }}
// // // //               animate={{ rotate: -360 }} // Keeps text upright
// // // //               transition={{ repeat: Infinity, duration, ease: "linear" }}
// // // //             >
// // // //               <div className="text-lg font-bold text-jm-blue-300">{index + 1}</div>
// // // //               <h3 className="text-base font-bold">{step.title}</h3>
// // // //               <p className="text-sm">{step.description}</p>
// // // //             </motion.div>
// // // //           );
// // // //         })}
// // // //       </motion.div>

// // // //       {/* Arrows linking steps in a circular flow */}
// // // //       {steps.map((_, index) => {
// // // //         const startAngle = (index / stepCount) * 360;
// // // //         const endAngle = ((index + 1) / stepCount) * 360;

// // // //         const x1 = radius * Math.cos((startAngle * Math.PI) / 180);
// // // //         const y1 = radius * Math.sin((startAngle * Math.PI) / 180);
// // // //         const x2 = radius * Math.cos((endAngle * Math.PI) / 180);
// // // //         const y2 = radius * Math.sin((endAngle * Math.PI) / 180);

// // // //         return (
// // // //           <motion.svg
// // // //             key={`arrow-${index}`}
// // // //             className="absolute"
// // // //             width="30"
// // // //             height="30"
// // // //             viewBox="0 0 24 24"
// // // //             fill="none"
// // // //             stroke="black"
// // // //             strokeWidth="2"
// // // //             strokeLinecap="round"
// // // //             strokeLinejoin="round"
// // // //             style={{
// // // //               position: "absolute",
// // // //               left: `calc(50% + ${(x1 + x2) / 2}px)`,
// // // //               top: `calc(50% + ${(y1 + y2) / 2}px)`,
// // // //               transform: `translate(-50%, -50%) rotate(${startAngle + 90}deg)`,
// // // //             }}
// // // //           >
// // // //             <path d="M2 12h20m-5-5 5 5-5 5" />
// // // //           </motion.svg>
// // // //         );
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Lifecycle;

// // // "use client";

// // // import React from "react";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import ClampImage from "@/public/images/lineclamps/LineClamp1.webp"; // Temporary logo

// // // const steps = [
// // //   { title: "Integration & Test", description: "Engineering support for prototype and test wire harnesses to full bespoke EWIS solutions." },
// // //   { title: "OEM", description: "Serving as an OEM and producing components and assemblies for other OEMs." },
// // //   { title: "After Market", description: "Manufacturing and supplying the global MRO market for highest reliability." },
// // //   { title: "PMA", description: "Holding FAA Parts Manufacturer Approval (PMA) for stringent aviation safety standards." },
// // // ];

// // // const Lifecycle = () => {
// // //   const radius = 180; // Distance from center
// // //   const duration = 10; // Speed of movement
// // //   const stepCount = steps.length;

// // //   return (
// // //     <div className="relative flex items-center justify-center h-[500px] w-[500px] mx-auto">
// // //       {/* Center Logo (Perfectly Centered) */}
// // //       <div className="absolute flex items-center justify-center w-[140px] h-[140px] bg-white rounded-full shadow-lg z-10 overflow-hidden">
// // //         <Image src={ClampImage} alt="Logo" fill className="rounded-full object-cover" />
// // //       </div>

// // //       {/* Container for rotating steps */}
// // //       <motion.div
// // //         className="absolute w-full h-full flex items-center justify-center"
// // //         animate={{ rotate: 360 }}
// // //         transition={{ repeat: Infinity, duration, ease: "linear" }}
// // //       >
// // //         {steps.map((step, index) => {
// // //           const angle = (index / stepCount) * 360;
// // //           const x = radius * Math.cos((angle * Math.PI) / 180);
// // //           const y = radius * Math.sin((angle * Math.PI) / 180);

// // //           return (
// // //             <motion.div
// // //               key={index}
// // //               className="absolute w-40 text-center p-3 bg-white rounded-md shadow-md flex flex-col items-center"
// // //               style={{
// // //                 left: `calc(50% + ${x}px)`,
// // //                 top: `calc(50% + ${y}px)`,
// // //                 transform: `translate(-50%, -50%)`,
// // //               }}
// // //             >
// // //               <div className="text-lg font-bold text-jm-blue-300">{index + 1}</div>
// // //               <h3 className="text-base font-bold">{step.title}</h3>
// // //               <p className="text-sm">{step.description}</p>
// // //             </motion.div>
// // //           );
// // //         })}
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default Lifecycle;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import ClampImage from "@/public/images/lineclamps/LineClamp1.webp"; // Temporary logo

// // const steps = [
// //   { title: "Integration & Test", description: "Engineering support for prototype and test wire harnesses to full bespoke EWIS solutions." },
// //   { title: "OEM", description: "Serving as an OEM and producing components and assemblies for other OEMs." },
// //   { title: "After Market", description: "Manufacturing and supplying the global MRO market for highest reliability." },
// //   { title: "PMA", description: "Holding FAA Parts Manufacturer Approval (PMA) for stringent aviation safety standards." },
// // ];

// // const Lifecycle = () => {
// //   const radius = 180; // Distance from center
// //   // const duration = 10; // Speed of movement
// //   const stepCount = steps.length;z

// //   const [angleOffset, setAngleOffset] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setAngleOffset((prev) => (prev + 1) % 360); // Slowly increase angle to move the steps
// //     }, 50); // Adjust for smoother animation

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="relative flex items-center justify-center h-[500px] w-[500px] mx-auto">
// //       {/* Center Logo (Perfectly Centered) */}
// //       <div className="absolute flex items-center justify-center w-[140px] h-[140px] bg-white rounded-full shadow-lg z-10 overflow-hidden">
// //         <Image src={ClampImage} alt="Logo" fill className="rounded-full object-cover" />
// //       </div>

// //       {/* Steps Moving in a Circular Orbit Like a Ferris Wheel */}
// //       {steps.map((step, index) => {
// //         const angle = ((index / stepCount) * 360 + angleOffset) % 360; // Ensure smooth circular motion
// //         const x = radius * Math.cos((angle * Math.PI) / 180);
// //         const y = radius * Math.sin((angle * Math.PI) / 180);

// //         return (
// //           <motion.div
// //             key={index}
// //             className="absolute w-40 text-center p-3 bg-white rounded-md shadow-md flex flex-col items-center"
// //             style={{
// //               left: `calc(50% + ${x}px)`,
// //               top: `calc(50% + ${y}px)`,
// //               transform: `translate(-50%, -50%)`,
// //             }}
// //           >
// //             <div className="text-lg font-bold text-jm-blue-300">{index + 1}</div>
// //             <h3 className="text-base font-bold">{step.title}</h3>
// //             <p className="text-sm">{step.description}</p>
// //           </motion.div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default Lifecycle;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import ClampImage from "@/public/images/lineclamps/LineClamp1.webp"; // Temporary logo

// const steps = [
//   { title: "Integration & Test", description: "Engineering support for prototype and test wire harnesses to full bespoke EWIS solutions." },
//   { title: "OEM", description: "Serving as an OEM and producing components and assemblies for other OEMs." },
//   { title: "After Market", description: "Manufacturing and supplying the global MRO market for highest reliability." },
//   { title: "PMA", description: "Holding FAA Parts Manufacturer Approval (PMA) for stringent aviation safety standards." },
// ];

// const Lifecycle = () => {
//   const radius = 180; // Distance from center
//   const duration = 10; // Speed of movement in seconds
//   const stepCount = steps.length;
//   const [angleOffset, setAngleOffset] = useState(0);

//   useEffect(() => {
//     let startTime;
    
//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = (timestamp - startTime) / 1000; // Convert to seconds
//       const angle = (elapsed / duration) * 360; // Calculate smooth rotation
//       setAngleOffset(angle % 360);
//       requestAnimationFrame(animate);
//     };

//     const animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <div className="relative flex items-center justify-center h-[500px] w-[500px] mx-auto">
//       {/* Center Logo (Perfectly Centered) */}
//       <div className="absolute flex items-center justify-center w-[140px] h-[140px] bg-white rounded-full shadow-lg z-10 overflow-hidden">
//         <Image src={ClampImage} alt="Logo" fill className="rounded-full object-cover" />
//       </div>

//       {/* Steps Moving in a Circular Orbit Like a Ferris Wheel */}
//       {steps.map((step, index) => {
//         const angle = ((index / stepCount) * 360 + angleOffset) % 360;
//         const x = radius * Math.cos((angle * Math.PI) / 180);
//         const y = radius * Math.sin((angle * Math.PI) / 180);

//         return (
//           <motion.div
//             key={index}
//             className="absolute w-40 text-center p-3 bg-white rounded-md shadow-md flex flex-col items-center"
//             style={{
//               left: `calc(50% + ${x}px)`,
//               top: `calc(50% + ${y}px)`,
//               transform: `translate(-50%, -50%)`,
//             }}
//           >
//             <div className="text-lg font-bold text-jm-blue-300">{index + 1}</div>
//             <h3 className="text-base font-bold">{step.title}</h3>
//             <p className="text-sm">{step.description}</p>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default Lifecycle;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LifecycleHexagon from "@/public/images/about/LifecycleHexagon.webp"; // Replace with the hexagonal image

const steps = [
  { title: "Integration & Test", description: "Engineering support for prototype and test wire harnesses to full bespoke EWIS solutions." },
  { title: "OEM", description: "Serving as an OEM and producing components and assemblies for other OEMs." },
  { title: "After Market", description: "Manufacturing and supplying the global MRO market for highest reliability." },
  { title: "PMA", description: "Holding FAA Parts Manufacturer Approval (PMA) for stringent aviation safety standards." },
];

const Lifecycle = () => {
  const radius = 180; // Distance from center
  const duration = 10; // Speed of movement in seconds
  const stepCount = steps.length;
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // Convert to seconds
      const angle = (elapsed / duration) * 360; // Calculate smooth rotation
      setAngleOffset(angle % 360);
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-[500px] w-[500px] mx-auto">
      {/* Center Hexagon Logo (WITHOUT White Circle) */}
      <div className="absolute flex items-center justify-center z-10">
        <Image 
          src={LifecycleHexagon} 
          alt="Logo" 
          width={140} // Adjust to match original size
          height={140} 
          className="object-cover"
        />
      </div>

      {/* Steps Moving in a Circular Orbit Like a Ferris Wheel */}
      {steps.map((step, index) => {
        const angle = ((index / stepCount) * 360 + angleOffset) % 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={index}
            className="absolute w-40 text-center p-3 bg-white rounded-md shadow-md flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="text-lg font-bold text-jm-blue-300">{index + 1}</div>
            <h3 className="text-base font-bold">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Lifecycle;
