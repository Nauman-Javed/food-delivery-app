import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="mt-5  h-[100] border-2 border-gray-200 rounded-lg flex justify-between items-center overflow-hidden">
      <div className="p-10 my-auto flex flex-col gap-2 ">
        <p className="text-lg">
          Order Restaurant food, takeaway and groceries.
        </p>
        <div>
          <p className="text-7xl font-bold">Feast Your Senses,</p>
          <p className="text-7xl font-bold text-custom-orange">
            Fast and Fresh
          </p>
        </div>
      </div>
      <div className="relative top-10">
        <Image src={Images.orangeBG} alt="orangeBackGround" />
      </div>
    </div>
  );
};
