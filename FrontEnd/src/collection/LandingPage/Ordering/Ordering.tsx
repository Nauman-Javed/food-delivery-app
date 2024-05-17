import { Images } from "@/assets";
import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Ordering = () => {
  return (
    <div className="mt-28 bg-[#E0E1DC]  rounded-md flex justify-between items-center ">
      <div className="relative left-6 -top-10 ">
        <Image src={Images.orderingApp.person} alt="person" />
      </div>
      <div className="flex justify-center items-center flex-col gap-5 mr-[150px] ">
        <div className="flex justify-center items-center">
          <Image src={Images.logo} width={200} className="h-auto" alt="logo" />
          <StyledTypography
            variant="subtitle2"
            text="ing is more"
            className="text-6xl font-bold tracking-tight cursor-default"
          />
        </div>

        <div className="flex justify-center items-center bg-black rounded-full p-4 ">
          <StyledTypography
            variant="subtitle2"
            text="Personalised"
            className="underline text-custom-orange font-semibold text-4xl ml-8 cursor-default"
          />
          <StyledTypography
            variant="subtitle2"
            text="& Instant"
            className="text-white font-semibold text-4xl ml-3  mr-8 cursor-default"
          />
        </div>

        <div>
          <StyledTypography
            variant="subtitle2"
            text="Download the Order.uk app for faster ordering "
            className="text-lg font-semibold cursor-default"
          />
        </div>
        <Image src={Images.appStore} alt="appStore" />
      </div>
    </div>
  );
};
