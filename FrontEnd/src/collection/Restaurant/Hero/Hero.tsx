import StyledTypography from "@/components/Text/StyledTypography";
import { useRestaurantStore } from "@/store/RestaurantStore";
import { RestaurantProps } from "@/store/restaurantData";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface slugProps {
  slug: string;
}

export const Hero = ({ slug }: slugProps) => {
  console.log(slug);
  const { findRestaurant } = useRestaurantStore();
  const [restaurantName, setRestaurantName] = useState<RestaurantProps | null>(
    null
  );

  useEffect(() => {
    if (slug) {
      const restaurantFound = findRestaurant(slug as string);
      if (restaurantFound) {
        setRestaurantName(restaurantFound);
      }
    }
  }, []);

  return (
    <div className=" relative mt-5  h-[477px] border-2 border-gray-200 rounded-lg flex justify-between items-center mx-3 md:mx-0 flex-col-reverse md:flex-row ">
      <div className="p-4 md:p-10  flex flex-col relative z-10 gap-0 md:gap-2 items-center md:items-start w-full md:w-4/5">
        <StyledTypography
          text={restaurantName?.name ?? ""}
          variant="h2"
          fontWeight={"bold"}
          className="cursor-default text-[34px] md:text-6xl"
        />
        <StyledTypography
          text="Restaurant"
          variant="h2"
          fontWeight={"bold"}
          color={"#FC8A06"}
          className="cursor-default text-[34px] md:text-6xl"
        />
        <div className="bg-black w-2/3 md:w-2/6 rounded-full text-center mt-7">
          <StyledTypography
            text="Delivery in 20-25 Minutes"
            variant="body2"
            fontWeight={"bold"}
            color={"white"}
            className="cursor-default p-3"
          />
        </div>
      </div>

      <div className="relative right-0 md:right-16 z-20 ">
        <Image
          src="/assets/RestaurantPage/smallLogo.svg"
          alt="Restaurant logo"
          width={581}
          height={581}
        />
      </div>
    </div>
  );
};
