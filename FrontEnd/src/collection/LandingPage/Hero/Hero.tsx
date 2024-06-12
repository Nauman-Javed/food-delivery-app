import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="mt-16 md:mt-5 h-[283px] md:h-[380px]  lg:h-[477px] border-2 border-gray-200 rounded-xl md:rounded-lg flex justify-between items-center overflow-hidden bg-[#E2E2E2] md:bg-white mx-3 md:mx-0">
      <div className="p-4 md:p-6 lg:p-10 my-auto flex flex-col gap-0 md:gap-2 items-center md:items-start w-full md:w-[60%] lg:w-auto">
        <StyledTypography
          text="Order Restaurant food, takeaway and groceries."
          className="cursor-default text-[14px] md:text-[16px] lg:text-xl"
        />
        <StyledTypography
          text="Feast Your Senses,"
          fontWeight={"bold"}
          className="cursor-default text-[34px] md:text-4xl lg:text-6xl"
        />
        <StyledTypography
          text="Fast and Fresh"
          fontWeight={"bold"}
          color={"#FC8A06"}
          className="cursor-default text-[34px] md:text-4xl lg:text-6xl"
        />
      </div>
      <div className="relative top-20 left-20 hidden md:block">
        <Image
          src={"/assets/LandingPage/OrangeBG.svg"}
          alt="orangeBackGround"
          width={625}
          height={100}
        />
      </div>
    </div>
  );
};
