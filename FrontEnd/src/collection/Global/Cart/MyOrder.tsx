import StyledTypography from "@/components/Text/StyledTypography";
import { IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const MyOrder = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 0) {
      return null;
    }
    setCount(count - 1);
  };

  return (
    <div className="h-full overflow-y-scroll">
      <div className="bg-white h-[20%] w-[100%] rounded-lg p-3 md:p-4 flex mb-4 shadow-custom-lrb">
        <div className="w-[70%] lg:w-[75%] flex">
          <div className="">
            <Image
              src="/assets/RestaurantPage/juices.svg"
              alt="FootItem"
              width={60}
              height={60}
            />
          </div>
          <div className="ml-6">
            <StyledTypography
              text="Food Item Name"
              className="font-semibold text-sm lg:text-base"
            />
            <StyledTypography
              text="Price "
              className="font-medium text-sm lg:text-base"
            />
          </div>
        </div>
        <div className="w-[30%] lg:w-[25%] flex justify-center items-center ">
          <div className=" bg-[#ffe6ff] shadow-custom-lrb rounded-3xl flex justify-center items-center gap-2">
            <IconButton onClick={handleDecrement}>
              <RemoveRoundedIcon />
            </IconButton>
            <StyledTypography
              text={count}
              className="text-[#77007a] font-semibold text-sm md:text-lg"
            />

            <IconButton onClick={handleIncrement}>
              <AddRoundedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
