import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { footerLinks } from "./footerLinks";

export const Footer = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#D9D9D9] ">
        <div className="flex justify-between items-center p-24 ml-24">
          <div className="flex flex-col justify-center items-start gap-6">
            <Image src={Images.logo} width={250} />
            <Image src={Images.appStore} width={350} />
            <p>Company # 490039-445, Registered with House of companies.</p>
          </div>
          <div>
            <p className="font-bold">Get Exclusive Deals in your Inbox</p>
            <div className="flex justify-start items-center gap-4 mt-7">
              <Image src={Images.facebook} width={40} />
              <Image src={Images.instagram} width={40} />
              <Image src={Images.tiktok} width={40} />
              <Image src={Images.snapchat} width={40} />
            </div>
          </div>
          <div className="flex justify-center items-center gap-16 mr-24">
            <div className="flex flex-col gap-3 ">
              <p className="text-xl font-bold">Legal Pages</p>
              <ul className="flex flex-col gap-3 underline">
                {footerLinks[0].links.map((index, link) => (
                  <li key={index}>{link.name}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-bold">Important Links</p>
              <ul className="flex flex-col gap-3 underline">
                {footerLinks[1].links.map((index, link) => (
                  <li key={index}>{link.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex justify-between items-center text-white text-xs p-6">
          <p className="ml-9"> Order.uk Copyright 2024, All Rights Reserved.</p>
          <div className="flex mr-9 gap-5">
            <p>Privacy Policy </p>
            <p>Terms</p>
            <p>Pricing</p>
            <p>Do not sell or share my personal information</p>
          </div>
        </div>
      </div>
    </div>
  );
};
