import { Images } from "@/assets";
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
          <p className="text-sm font-semibold mr-3">
            Regent Street, A4, A4201, London
          </p>
          <p className="text-xs font-semibold text-[#FC8A06] underline mr-12">
            Change Locations
          </p>
        </div>
      </div>
    </div>
  );
};
