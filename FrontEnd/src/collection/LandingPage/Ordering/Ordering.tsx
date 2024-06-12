import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import React from "react";

export const Ordering = () => {
  return (
    <div className="mt-16 md:mt-28 bg-[#E0E1DC]  rounded-md flex justify-between items-center h-fit flex-col-reverse md:flex-row mx-3 md:mx-0">
      <div className="relative lg:left-6 lg:-top-10 w-[300px] sm:w-[300px] md:w-[832px] mt-5 md:mt-0">
        <Image
          src={"/assets/OrderingApp/2Person.svg"}
          alt="person"
          width={832}
          height={10}
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-5 mr-0 md:mr-[20px] lg:mr-[150px] mt-16 md:mt-0">
        <div className="flex justify-center items-center">
          <div className="w-[110px] md:w-[110px] lg:w-[200px]">
            <Image
              src={"/assets/Global/LOGO.svg"}
              height={10}
              width={200}
              className="h-auto"
              alt="logo"
            />
          </div>
          <StyledTypography
            variant="subtitle2"
            text="ing is more"
            className="text-4xl lg:text-6xl font-bold tracking-tight cursor-default"
          />
        </div>

        <div className="flex justify-center items-center bg-none md:bg-black rounded-full  md:p-1 lg:p-4">
          <StyledTypography
            variant="subtitle2"
            text="Personalised"
            className="underline text-custom-orange font-semibold text-2xl lg:text-4xl ml-8 cursor-default"
          />
          <StyledTypography
            variant="subtitle2"
            text="& Instant"
            className="text-black md:text-white font-semibold text-2xl lg:text-4xl ml-2 md:ml-3  mr-8 cursor-default"
          />
        </div>

        <div>
          <StyledTypography
            variant="subtitle2"
            text="Download the Order.uk app for faster ordering "
            className="text-sm lg:text-lg font-semibold cursor-default"
          />
        </div>
        <div className="w-[284px] sm:w-[284px] md:w-[300px] lg:w-[412px]">
          <Image
            src={"/assets/Global/app-store-badges-en 1.svg"}
            alt="appStore"
            width={412}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};
