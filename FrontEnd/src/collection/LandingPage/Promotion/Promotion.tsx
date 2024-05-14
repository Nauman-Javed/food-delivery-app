import { Images } from "@/assets";
import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Promotion = () => {
  return (
    <div className="h-[50px] rounded-b-xl bg-gray-100  flex justify-between items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="ml-16 text-sm font-semibold">
            Get 5% Off your first order,{" "}
            <span className="text-[#FC8A06] text-sm font-semibold underline">
              Promo: ORDER5
            </span>
          </p>
        </div>
        <div className="flex items-center h-full">
          <Image
            src={Images.locationSvg}
            alt="location"
            width={20}
            className="mr-3"
          />

          <StyledTypography
            text="Regent Street, A4, A4201, London"
            marginRight={"12px"}
            fontSize={"12px"}
            fontWeight={"bold"}
          />
          <StyledTypography
            text="Change Locations"
            color={"#FC8A06"}
            marginRight={"48px"}
            fontSize={"12px"}
            fontWeight={"bold"}
          />
        </div>
      </div>
    </div>
  );
};
