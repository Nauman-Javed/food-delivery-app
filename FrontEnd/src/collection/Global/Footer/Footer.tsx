import { Images } from "@/assets";
import React from "react";
import Image from "next/image";
import { footerLinks } from "./footerLinks";
import StyledTypography from "@/components/Text/StyledTypography";

export const Footer = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#D9D9D9] ">
        <div className="flex justify-between items-center p-24 ml-24">
          <div className="flex flex-col justify-center items-start gap-6">
            <Image src={Images.global.logo} width={250} alt="logo" />
            <Image src={Images.global.appStore} width={350} alt="appStore" />
            <StyledTypography
              variant="subtitle2"
              text="Company # 490039-445, Registered with House of companies."
              className="cursor-default"
            />
          </div>
          <div>
            <StyledTypography
              variant="subtitle2"
              text="Get Exclusive Deals in your Inbox"
              className="font-bold cursor-default"
            />
            <div className="flex justify-start items-center gap-4 mt-7">
              <Image src={Images.global.facebook} width={40} alt="facebook" />
              <Image src={Images.global.instagram} width={40} alt="instagram" />
              <Image src={Images.global.tiktok} width={40} alt="tiktok" />
              <Image src={Images.global.snapchat} width={40} alt="snapchat" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-16 mr-24">
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
          <div className="flex mr-9 gap-5">
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
