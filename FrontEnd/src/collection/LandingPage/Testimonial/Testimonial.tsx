import StyledTypography from "@/components/Text/StyledTypography";
import React from "react";

export const Testimonial = () => {
  return (
    <div className="bg-custom-orange  rounded-md mt-16  flex justify-center items-center gap-20 md:gap-52  flex-col md:flex-row h-fit p-6 mx-3 md:mx-0">
      <div className="flex flex-col justify-center items-center ">
        <StyledTypography
          text="546+"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          fontSize={"48px"}
          lineHeight={"50px"}
          className="cursor-default"
        />
        <StyledTypography
          text="Registered Riders"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          sx={{
            fontSize: {
              xs: "30px",
              md: "18px",
            },
          }}
          className="cursor-default"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <StyledTypography
          text="789,900+"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          fontSize={"48px"}
          lineHeight={"50px"}
          className="cursor-default"
        />
        <StyledTypography
          text="Orders Delivered"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          sx={{
            fontSize: {
              xs: "30px",
              md: "18px",
            },
          }}
          className="cursor-default"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <StyledTypography
          text="690+"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          fontSize={"48px"}
          lineHeight={"50px"}
          className="cursor-default"
        />
        <StyledTypography
          text="Restaurants Partnered"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          sx={{
            fontSize: {
              xs: "30px",
              md: "18px",
            },
          }}
          className="cursor-default"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <StyledTypography
          text="17,457+"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          fontSize={"48px"}
          lineHeight={"50px"}
          className="cursor-default"
        />
        <StyledTypography
          text="Food items"
          variant="subtitle1"
          color={"white"}
          fontWeight={"normal"}
          sx={{
            fontSize: {
              xs: "30px",
              md: "18px",
            },
          }}
          className="cursor-default"
        />
      </div>
    </div>
  );
};
