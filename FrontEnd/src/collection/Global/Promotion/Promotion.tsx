import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Promotion = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="h-[50px] rounded-b-xl bg-gray-100   justify-between items-center hidden md:flex relative ">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="ml-16 text-sm font-semibold cursor-default">
              Get 5% Off your first order,{" "}
              <span className="text-[#FC8A06] text-sm font-semibold underline">
                Promo: ORDER5
              </span>
            </p>
          </div>
          <div className="flex items-center h-full">
            <Image
              src={"/assets/Global/Location.svg"}
              alt="location"
              width={20}
              height={100}
              className="mr-3"
            />

            <StyledTypography
              className="mr-3 text-xs font-bold cursor-default"
              text="Regent Street, A4, A4201, London"
            />
            <Link href={"/profile"}>
              <StyledTypography
                text="Change Locations"
                color={"#FC8A06"}
                marginRight={"48px"}
                fontSize={"12px"}
                fontWeight={"bold"}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[100px] flex justify-between items-center md:hidden">
        <div className="ml-4">
          <Link href="/">
            <Image
              src={"/assets/Global/LOGO.svg"}
              alt="Logo"
              width={154}
              height={100}
            />
          </Link>
        </div>
        <div className=" p-4 border-l-2 h-full">
          <Image
            src={"/assets/LandingPage/hamburger.svg"}
            alt="hamburger"
            width={65}
            height={100}
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center z-20">
              <Image
                src={"/assets/LandingPage/cross.svg"}
                alt="cross"
                width={65}
                height={100}
                onClick={toggleMenu}
                className="absolute top-0 right-0"
              />

              <Link
                href="/login"
                className="flex items-center gap-2 bg-black text-white rounded-full px-8 py-3"
              >
                <Image
                  src={"/assets/Global/Male User.svg"}
                  width={30}
                  height={100}
                  alt="user"
                />{" "}
                Login/Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
