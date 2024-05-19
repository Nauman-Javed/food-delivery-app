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
          <Image src={Images.landingPage.mcdonald} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.landingPage.papaJohn} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.landingPage.kfc} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.landingPage.texas} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.landingPage.burgerKing} alt="" />
        </Link>
        <Link href="/restaurant">
          <Image src={Images.landingPage.shaurma} alt="" />
        </Link>
      </div>
    </div>
  );
};
