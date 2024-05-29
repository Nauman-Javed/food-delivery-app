import Restaurants from "@/components/Restaurants/Restaurants";
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
        className="text-2xl md:text-4xl font-bold mb-10 ml-0 md:ml-5"
      />
      <div className="flex justify-between items-center gap-3 md:gap-0 max-w-full overflow-x-auto scroll-smooth">
        <Link href="/restaurant">
          <div className="w-[150px] sm:w-[150px] md:w-[238px]">
            <Image
              src={"/assets/RestaurantNames/mcdonalds.svg"}
              alt=""
              width={238}
              height={10}
              className="w-[350px] md:w-[238px]"
            />
          </div>
        </Link>
        <Link href="/restaurant">
          <div className="w-[150px] sm:w-[150px] md:w-[238px]">
            <Image
              src={"/assets/RestaurantNames/papaJohns.svg"}
              alt=""
              width={238}
              height={10}
              className="w-[350px] md:w-[238px]"
            />
          </div>
        </Link>
        <Link href="/restaurant">
          <div className="w-[150px] sm:w-[150px] md:w-[238px]">
            <Image
              src={"/assets/RestaurantNames/KFC.svg"}
              alt=""
              width={238}
              height={10}
              className="w-[350px] md:w-[238px]"
            />
          </div>
        </Link>
        <Link href="/restaurant">
          <div className="w-[150px] sm:w-[150px] md:w-[238px]">
            <Image
              src={"/assets/RestaurantNames/texas.svg"}
              alt=""
              width={238}
              className="w-[350px] md:w-[238px]"
              height={10}
            />
          </div>
        </Link>
        <Link href="/restaurant">
          <div className="w-[150px] sm:w-[150px] md:w-[238px]">
            <Image
              src={"/assets/RestaurantNames/burgerKing.svg"}
              alt=""
              width={238}
              height={10}
              className="w-[350px] md:w-[238px]"
            />
          </div>
        </Link>
        <Link href="/restaurant">
          <div className="w-[150px] sm:w-[150px] md:w-[238px]">
            <Image
              src={"/assets/RestaurantNames/Shaurma.svg"}
              alt=""
              width={238}
              height={10}
              className="w-[350px] md:w-[238px]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
