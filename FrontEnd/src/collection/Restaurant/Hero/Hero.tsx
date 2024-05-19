import { Images } from "@/assets";
import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="mt-5  h-[477px] border-2 border-gray-200 rounded-lg flex justify-between items-center ">
      <div className="p-10 flex flex-col gap-2">
        <div>
          <StyledTypography
            text="Restaurant Name"
            variant="h2"
            fontWeight={"bold"}
            className="cursor-default"
          />
          <StyledTypography
            text="Restaurant"
            variant="h2"
            fontWeight={"bold"}
            color={"#FC8A06"}
            className="cursor-default"
          />
          <div className="bg-black w-1/2 rounded-full text-center mt-5">
            <StyledTypography
              text="Delivery in 20-25 Minutes"
              variant="body2"
              fontWeight={"bold"}
              color={"white"}
              className="cursor-default p-3"
            />
          </div>
        </div>
      </div>
      <div className="relative right-16 ">
        <Image src={Images.restaurant.smallLogo} alt="restaurant logo" />
        <div className="absolute top-0 right-0 ">
          <Image src={Images.restaurant.rating} alt="rating" />
        </div>
      </div>
    </div>
  );
};
