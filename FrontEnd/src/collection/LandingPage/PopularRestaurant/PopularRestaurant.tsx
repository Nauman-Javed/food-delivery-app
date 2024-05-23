import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PopularRestaurant = () => {
  return (
    <div className="mt-10 mx-3 md:mx-0">
      <StyledTypography
        variant="h1"
        text="Popular Restaurants"
        className="text-4xl font-bold mb-10 ml-5"
      />
      <div className="flex justify-between items-center gap-1 md:gap-0 ">
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 16.svg"}
            alt=""
            width={238}
            height={10}
            className="w-[350px] md:w-[238px]"
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 17.svg"}
            alt=""
            width={238}
            height={10}
            className="w-[350px] md:w-[238px]"
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 18.svg"}
            alt=""
            width={238}
            height={10}
            className="w-[350px] md:w-[238px]"
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 19.svg"}
            alt=""
            width={238}
            className="w-[350px] md:w-[238px]"
            height={10}
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 20.svg"}
            alt=""
            width={238}
            height={10}
            className="w-[350px] md:w-[238px]"
          />
        </Link>
        <Link href="/restaurant">
          <Image
            src={"/assets/LandingPage/Group 21.svg"}
            alt=""
            width={238}
            height={10}
            className="w-[350px] md:w-[238px]"
          />
        </Link>
      </div>
    </div>
  );
};
