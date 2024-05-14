import { Images } from "@/assets";
import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="mt-5  h-[100] border-2 border-gray-200 rounded-lg flex justify-between items-center overflow-hidden">
      <div className="p-10 my-auto flex flex-col gap-2 ">
        <StyledTypography
          text="Order Restaurant food, takeaway and groceries."
          variant="subtitle1"
        />
        <div>
          <StyledTypography
            text="Feast Your Senses,"
            variant="h2"
            fontWeight={"bold"}
          />
          <StyledTypography
            text="Fast and Fresh"
            variant="h2"
            fontWeight={"bold"}
            color={"#FC8A06"}
          />
        </div>
      </div>
      <div className="relative top-10">
        <Image src={Images.orangeBG} alt="orangeBackGround" />
      </div>
    </div>
  );
};
