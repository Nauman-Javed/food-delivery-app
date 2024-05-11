import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

export const PopularRestaurant = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold mb-10 ml-5">Popular Restaurants</h1>
      <div className="flex justify-between items-center">
        <Image src={Images.mcdonald} alt="" />
        <Image src={Images.papaJohn} alt="" />
        <Image src={Images.kfc} alt="" />
        <Image src={Images.texas} alt="" />
        <Image src={Images.burgerKing} alt="" />
        <Image src={Images.shaurma} alt="" />
      </div>
    </div>
  );
};
