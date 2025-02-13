"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromTop,
} from "@/utils/animationVariations";

import Logo from "@/public/svg/J&MLogo.svg";
import LandingBackground from "@/public/images/home/LandingBackground.webp";
import ClampBracket from "@/public/images/home/ClampsAndBracket.webp";
import WireHarness from "@/public/images/home/WireHarnesses.webp";
import LeftCable from "@/public/images/home/LeftCable.webp";
import LeftClamp from "@/public/images/home/LeftClamp.webp";
import LeftRoundClamp from "@/public/images/home/LeftRoundClamp.webp";
import LeftWires from "@/public/images/home/LeftWires.webp";
import RightCable from "@/public/images/home/RightCable.webp";
import RightCableWhite from "@/public/images/home/RightCableWhite.webp";
import RightClamp from "@/public/images/home/RightClamp.webp";
import RightJet from "@/public/images/home/RightJet.webp";

// // NEW CODE
// const PlaneWithBanner = () => {
//   return (
//     <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
//       <div className="flex items-center animate-flyAerialShow relative z-30">
//         {/* Banner */}
//         <Link href="/line-clamps">
//           <div
//             className="-mt-2 md:-mt-4 lg:-mt-4 bg-white text-black font-bold px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg border border-black text-xs md:text-sm lg:text-base relative z-30 cursor-pointer hover:shadow-lg pointer-events-auto"
//           >
//             New Product: Brown Silicone Clamps!
//           </div>
//         </Link>
//         {/* Plane */}
//         <img
//           src="/images/JMPlane.webp"
//           alt="Plane"
//           className="w-32 md:w-48 lg:w-64 relative z-30 pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// };

const Landing = () => {
  return (
    // Removed pointer-events-none
    <div className="relative w-full h-screen overflow-hidden"> 
      {/* <PlaneWithBanner/> */}
      <Image
        src={LandingBackground}
        alt="Landing Background"
        className="absolute bottom-[100px] -z-10"
      />
      <div className="absolute top-[5px] md:top-[10px] 2xl:top-[153px] -left-[60px] md:-left-[120px] 2xl:-left-[107px]">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }} // Start larger and faded
          animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and correct size
          transition={{ duration: 1, ease: "easeOut" }} // Adjust duration and easing
          className="relative flex items-center justify-center size-[100px] md:size-[200px] 2xl:size-[288px] bg-transparent border border-[#DDDDDD] rounded-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }} // Start larger and faded
            animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and correct size
            transition={{ duration: 1, ease: "easeOut" }} // Adjust duration and easing
            className="absolute size-[75%] 2xl:size-[80%] bg-transparent border border-[#DDDDDD] rounded-full"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeInFromLeft}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={1.8}
        className="absolute -top-[15px] md:-top-[30px] 2xl:top-[90px] left-[5px] md:left-[10px] 2xl:left-[80px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      >
        <Image src={LeftCable} alt="Left Cable" className="w-full h-auto" />
      </motion.div>
      <motion.div
        variants={fadeInFromLeft}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={1}
        className="absolute -top-[20px] md:-top-[40px] 2xl:top-[75px] -left-[70px] md:-left-[140px] 2xl:-left-[160px] w-[90px] md:w-[180px] 2xl:w-[270px]"
      >
        <Image src={LeftClamp} alt="Left Clamp" className="w-full h-auto" />
      </motion.div>
      <motion.div
        variants={fadeInFromLeft}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={2.2}
        className="absolute top-[40px] md:top-[80px] 2xl:top-[250px] left-[35px] md:left-[70px] 2xl:left-[175px] w-[70px] md:w-[140px] 2xl:w-[210px]"
      >
        <Image
          src={LeftRoundClamp}
          alt="Left Round Clamp"
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div
        variants={fadeInFromLeft}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={1.4}
        className="absolute top-[50px] md:top-[100px] 2xl:top-[270px] -left-[25px] md:-left-[50px] 2xl:-left-[20px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      >
        <Image src={LeftWires} alt="Left Wires" className="w-full h-auto" />
      </motion.div>
      <div className="absolute top-[30px] md:top-[60px] 2xl:top-[316px] -right-[70px] md:-right-[140px] 2xl:-right-[116px]">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }} // Start larger and faded
          animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and correct size
          transition={{ duration: 1, ease: "easeOut" }} // Adjust duration and easing
          className="relative flex items-center justify-center size-[100px] md:size-[200px] 2xl:size-[288px] bg-transparent border border-[#DDDDDD] rounded-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }} // Start larger and faded
            animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and correct size
            transition={{ duration: 1, ease: "easeOut" }} // Adjust duration and easing
            className="absolute size-[75%] 2xl:size-[80%] bg-transparent border border-[#DDDDDD] rounded-full"
          />
        </motion.div>
      </div>

      <motion.div
        variants={fadeInFromRight}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={1.2}
        className="absolute -top-[35px] md:-top-[70px] 2xl:top-[105px] -right-[70px] md:-right-[140px] 2xl:-right-[115px] w-[90px] md:w-[180px] 2xl:w-[270px]"
      >
        <Image
          src={RightCableWhite}
          alt="Right Cable White"
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div
        variants={fadeInFromRight}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={2}
        className="absolute -top-[20px] md:-top-[40px] 2xl:top-[145px] right-[10px] md:right-[20px] 2xl:right-[125px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      >
        <Image src={RightClamp} alt="Right Clamp" className="w-full h-auto" />
      </motion.div>
      <motion.div
        variants={fadeInFromRight}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={1.6}
        className="absolute top-[30px] md:top-[60px] 2xl:top-[300px] -right-[30px] md:-right-[60px] 2xl:right-[10px] w-[90px] md:w-[180px] 2xl:w-[270px]"
      >
        <Image src={RightJet} alt="Right Jet" className="w-full h-auto" />
      </motion.div>
      <motion.div
        variants={fadeInFromRight}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={2.4}
        className="absolute top-[100px] md:top-[200px] 2xl:top-[510px] right-[15px] md:right-[30px] 2xl:right-[130px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      >
        <Image src={RightCable} alt="Right Cable" className="w-full h-auto" />
      </motion.div>
      <div className="flex flex-col items-center mt-[30%] md:mt-[20%] lg:mt-[15%] xl:mt-[5%] space-y-2 md:space-y-4 2xl:space-y-6">
        <div className="flex flex-col items-center space-y-2 md:space-y-4 2xl:space-y-6">
          <motion.div
            variants={fadeInFromTop}
            initial="initial"
            animate="animate"
            custom={1}
            className="w-full max-w-full"
          >
            <Image src={Logo} alt="J&M Logo" className="w-full h-auto" />
          </motion.div>
          <motion.div
            variants={fadeInFromTop}
            initial="initial"
            animate="animate"
            custom={1.2}
          >
            <p className="font-normal font-hk md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]">
              The industry leader in
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeInFromTop}
          initial="initial"
          animate="animate"
          custom={1.4}
        >
          <p className="font-bold font-hk md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]">
            Line Support Clamps & Wire Harnesses
          </p>
        </motion.div>
        <div className="flex space-x-4">
          <Button
            text="Learn More"
            link="/about"
            bgColor={"bg-white"}
            borderColor={"border-jm-blue-200"}
            textColor={"text-jm-blue-200"}
            hoverBg={"group hover:!bg-jm-blue-200"}
            hoverText={"group-hover:!text-white"}
          />
          <Button
            text="Contact Us"
            link="/contact-us"
            bgColor={"bg-jm-blue-200"}
            borderColor={"border-jm-blue-200"}
            textColor={"text-white"}
            hoverBg={"group hover:!bg-white"}
            hoverText={"group-hover:!text-jm-blue-200"}
          />
        </div>
        <div className="flex justify-center space-x-6">
  {/* Clamps Hexagon */}
  <Link href="/line-clamps" className="relative group">
    <Image
      src={ClampBracket}
      alt="Clamps and Brackets"
      className="w-[175px] 2xl:w-[202px] brightness-75 group-hover:animate-shake"
    />
    <div className="absolute justify-center content-center top-10 2xl:top-14 inset-x-0 text-center">
      <p className="font-bold font-hk text-xl text-white">
        Clamps
        <br />&<br />
        Bracket
      </p>
    </div>
  </Link>

  {/* Wire Harnesses Hexagon */}
  <Link href="/wire-harnesses" className="relative group">
    <Image
      src={WireHarness}
      alt="Wire Harnesses"
      className="w-[175px] 2xl:w-[202px] brightness-75 group-hover:animate-shake"
    />
    <div className="absolute justify-center content-center top-14 2xl:top-16 inset-x-0 text-center">
      <p className="font-bold font-hk text-xl text-white">
        Wire
        <br />
        Harnesses
      </p>
    </div>
  </Link>

  {/* Clamps Duplicate 1 */}
  <Link href="/line-clamps" className="relative group">
    <Image
      src={ClampBracket}
      alt="Clamps and Brackets"
      className="w-[175px] 2xl:w-[202px] brightness-75 group-hover:animate-shake"
    />
    <div className="absolute justify-center content-center top-10 2xl:top-14 inset-x-0 text-center">
      <p className="font-bold font-hk text-xl text-white">
        Contract
        Manufacturing
      </p>
    </div>
  </Link>

  {/* Clamps Duplicate 2 */}
  <Link href="/applications" className="relative group">
    <Image
      src={ClampBracket}
      alt="Clamps and Brackets"
      className="w-[175px] 2xl:w-[202px] brightness-75 group-hover:animate-shake"
    />
    <div className="absolute justify-center content-center top-10 2xl:top-14 inset-x-0 text-center">
      <p className="font-bold font-hk text-xl text-white">
      Applications
      </p>
    </div>
  </Link>

  {/* Clamps Duplicate 3
  <Link href="/line-clamps" className="relative group">
    <Image
      src={ClampBracket}
      alt="Clamps and Brackets"
      className="w-[175px] 2xl:w-[202px] brightness-75 group-hover:animate-shake"
    />
    <div className="absolute justify-center content-center top-10 2xl:top-14 inset-x-0 text-center">
      <p className="font-bold font-hk text-xl text-white">
        Clamps
        <br />&<br />
        Bracket
      </p>
    </div>
  </Link> */}
</div>


      </div>
    </div>
  );
};

export default Landing;
