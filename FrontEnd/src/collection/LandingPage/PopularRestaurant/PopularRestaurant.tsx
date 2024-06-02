import { Restaurants } from "@/components/Restaurants/Restaurants";
import StyledTypography from "@/components/Text/StyledTypography";
import { useRestaurantStore } from "@/store/RestaurantStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PopularRestaurant = () => {
  const { restaurant } = useRestaurantStore();
  return (
    <div className="mt-10 mx-3 md:mx-0">
      <StyledTypography
        variant="h1"
        text="Popular Restaurants"
        className="text-2xl md:text-4xl font-bold mb-10 ml-0 md:ml-5"
      />
      <div className="flex justify-between items-center gap-3 md:gap-0 max-w-full overflow-x-auto scroll-smooth">
        {restaurant.map((res) => (
          <Restaurants image={res.image} slug={res.slug} key={res.id} />
        ))}
      </div>
    </div>
  );
};
