import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

export const Ordering = () => {
  return (
    <div className="mt-28 bg-[#E0E1DC]  rounded-md flex justify-between items-center ">
      <div className="relative left-6 -top-10 ">
        <Image src={Images.orderingApp.person} />
      </div>
      <div className="flex justify-center items-center flex-col gap-5 mr-[150px] ">
        <div className="flex justify-center items-center">
          <Image src={Images.logo} width={200} className="h-auto" />
          <p className="text-6xl font-bold tracking-tight">ing is more</p>
        </div>

        <div className="flex justify-center items-center bg-black rounded-full p-4 ">
          <p className="underline text-custom-orange font-semibold text-4xl ml-8">
            Personalised
          </p>
          <p className="text-white font-semibold text-4xl ml-3  mr-8">
            & Instant
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">
            Download the Order.uk app for faster ordering
          </p>
        </div>
        <Image src={Images.appStore} />
      </div>
    </div>
  );
};
