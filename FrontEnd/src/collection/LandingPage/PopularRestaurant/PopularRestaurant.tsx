import { Images } from "@/assets";
import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PopularRestaurant = () => {
  return (
    <div className="mt-10">
      <StyledTypography
        variant="h1"
        text="Popular Restaurants"
        className="text-4xl font-bold mb-10 ml-5"
      />
      <div className="flex justify-between items-center">
        <Link href="/restaurant">
          <Image src={Images.mcdonald} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.papaJohn} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.kfc} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.texas} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.burgerKing} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.shaurma} alt="" />
        </Link>
      </div>
    </div>
  );
};
