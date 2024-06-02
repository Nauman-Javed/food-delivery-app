import StyledTypography from "@/components/Text/StyledTypography";
import { useRestaurantStore } from "@/store/RestaurantStore";
import { RestaurantProps } from "@/store/restaurantData";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const Hero = () => {
  const { findRestaurant } = useRestaurantStore();
  const [restaurantName, setRestaurantName] = useState<RestaurantProps | null>(
    null
  );
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      const restaurantFound = findRestaurant(slug as string);
      if (restaurantFound) {
        setRestaurantName(restaurantFound);
      }
    }
  }, []);

  return (
    <div className=" relative mt-5  h-[477px] border-2 border-gray-200 rounded-lg flex justify-between items-center ">
      <div className="p-10 flex flex-col gap-2 relative z-10 ">
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
        <div className="bg-black w-80 rounded-full text-center mt-5">
          <StyledTypography
            text="Delivery in 20-25 Minutes"
            variant="body2"
            fontWeight={"bold"}
            color={"white"}
            className="cursor-default p-3"
          />
        </div>
      </div>

      <div className="relative right-16 z-20">
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
