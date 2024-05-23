import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Promotion = () => {
  return (
    <div className="h-[50px] rounded-b-xl bg-gray-100  flex justify-between items-center ">
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="ml-16 text-sm font-semibold cursor-default">
            Get 5% Off your first order,{" "}
            <span className="text-[#FC8A06] text-sm font-semibold underline">
              Promo: ORDER5
            </span>
          </p>
        </div>
        <div className="flex items-center h-full">
          <Image
            src={"/assets/Global/Location.svg"}
            alt="location"
            width={20}
            height={100}
            className="mr-3"
          />

          <StyledTypography
            className="mr-3 text-xs font-bold cursor-default"
            text="Regent Street, A4, A4201, London"
          />
          <StyledTypography
            text="Change Locations"
            color={"#FC8A06"}
            marginRight={"48px"}
            fontSize={"12px"}
            fontWeight={"bold"}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
