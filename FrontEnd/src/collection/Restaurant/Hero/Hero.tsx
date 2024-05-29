import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className=" relative mt-5  h-[477px] border-2 border-gray-200 rounded-lg flex justify-between items-center ">
      <div className="p-10 flex flex-col gap-2 relative z-10 ">
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
      <div className="relative right-16 z-20">
        <Image
          src="/assets/RestaurantPage/smallLogo.svg"
          alt="Restaurant logo"
          width={581}
          height={581}
        />
      </div>
    </div>
  );
};
