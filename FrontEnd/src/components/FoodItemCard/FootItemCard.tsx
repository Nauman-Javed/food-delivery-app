import React from "react";
import StyledTypography from "../Text/StyledTypography";
import Image from "next/image";

interface FoodItemsProps {
  id: number | string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const FootItemCard = (props: FoodItemsProps) => {
  const { id, name, description, price, image } = props;
  return (
    <div className="w-full md:w-[48%] lg:w-[32%] max-h-[245px] shadow-xl rounded-2xl p-5 flex ">
      <div className="w-1/2 h-full flex flex-col justify-between  py-6">
        <StyledTypography
          text={name}
          className="text-base md:text-xl font-semibold cursor-default"
        />
        <StyledTypography
          text={description}
          className="text-xs md:text-xs font-normal cursor-default"
        />
        <StyledTypography
          text={`PKR ${price}`}
          className="text-xs md:text-base font-bold cursor-default"
        />
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="relative">
          <Image
            src={image}
            alt="item Image"
            width={203}
            height={203}
            className="w-[150px] md:w-[180px] lg:w-[203px]"
          />
          <div className="absolute bottom-0 right-0 z-1">
            <Image
              src={"/assets/RestaurantPage/plusBackground.svg"}
              alt="plus Background"
              width={88}
              height={88}
            />
            <div className="absolute z-2 top-5 right-4">
              <Image
                src={"/assets/RestaurantPage/plus.svg"}
                alt="plus Background"
                width={49}
                height={49}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
