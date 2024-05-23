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
          <Image
            src={"/assets/LandingPage/Group 16.svg"}
            alt=""
            width={238}
            height={10}
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 17.svg"}
            alt=""
            width={238}
            height={10}
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 18.svg"}
            alt=""
            width={238}
            height={10}
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 19.svg"}
            alt=""
            width={238}
            height={10}
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 20.svg"}
            alt=""
            width={238}
            height={10}
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 21.svg"}
            alt=""
            width={238}
            height={10}
          />
        </Link>
      </div>
    </div>
  );
};
