import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className=" relative mt-5  h-[477px] border-2 border-gray-200 rounded-lg flex justify-between items-center ">
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <img
            src="/assets/Restaurant/background.svg"
            alt="Restaurant background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-10 flex justify-center items-center">
            <Image
              src="/assets/Restaurant/logo.svg"
              alt="Restaurant logo"
              width={40}
              height={40}
              className="w-10 h-auto"
            />
          </div>
        </div>
      </div>

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
          src="/assets/Restaurant/smallLogo.svg"
          alt="Restaurant logo"
          width={581}
          height={581}
        />
        <div className="absolute top-0 right-0">
          <Image
            src="/assets/Restaurant/rating.svg"
            alt="Rating"
            width={136}
            height={136}
          />
        </div>
      </div>
    </div>
  );
};
