import React from "react";
import Image from "next/image";
import { footerLinks } from "./footerLinks";
import StyledTypography from "@/components/Text/StyledTypography";

export const Footer = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#D9D9D9] ">
        <div className="flex justify-between items-center flex-col md:flex-row p-16  lg:p-24 lg:ml-24">
          <div className="flex flex-col justify-center items-start gap-10  md:gap-6">
            <Image
              src={"/assets/Global/logo.svg"}
              width={250}
              height={100}
              alt="logo"
            />
            <Image
              src={"/assets/Global/app-store-badges-en 1.svg"}
              width={350}
              height={100}
              alt="appStore"
            />
            <StyledTypography
              variant="subtitle2"
              text="Company # 490039-445, Registered with House of companies."
              className="cursor-default text-center md:text-start"
            />
          </div>
          <div className="my-14">
            <StyledTypography
              variant="subtitle2"
              text="Get Exclusive Deals in your Inbox"
              className="font-bold cursor-default"
            />
            <div className="flex justify-start items-center gap-4 mt-3  md:mt-7">
              <Image
                src={"/assets/Global/facebook.svg"}
                width={40}
                height={100}
                alt="facebook"
              />
              <Image
                src={"/assets/Global/instagram.svg"}
                width={40}
                height={100}
                alt="instagram"
              />
              <Image
                src={"/assets/Global/tiktok.svg"}
                width={40}
                height={100}
                alt="tiktok"
              />
              <Image
                src={"/assets/Global/snapchat.svg"}
                width={40}
                height={100}
                alt="snapchat"
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col md:flex-row  gap-16 mr-24">
            <div className="flex flex-col gap-3 ">
              <StyledTypography
                variant="subtitle2"
                text="Legal Pages"
                className="text-xl font-bold cursor-default"
              />
              <ul className="flex flex-col gap-3 underline">
                {footerLinks[0].links.map((link) => (
                  <li key={link.id}>{link.name}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <StyledTypography
                variant="subtitle2"
                text="Important Links"
                className="text-xl font-bold cursor-default"
              />
              <ul className="flex flex-col gap-3 underline">
                {footerLinks[1].links.map((link) => (
                  <li key={link.id}>{link.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex justify-between items-center text-white text-xs p-6">
          <StyledTypography
            variant="subtitle2"
            text="Order.uk Copyright 2024, All Rights Reserved."
            className="ml-9 cursor-default"
          />
          <div className="mr-9 gap-5 hidden md:flex">
            <StyledTypography
              variant="subtitle2"
              text="Privacy Policy"
              className="cursor-default"
            />
            <StyledTypography
              variant="subtitle2"
              text="Terms"
              className="cursor-default"
            />
            <StyledTypography
              variant="subtitle2"
              text="Pricing"
              className="cursor-default"
            />
            <StyledTypography
              variant="subtitle2"
              text="Do not sell or share my personal information"
              className="cursor-default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
