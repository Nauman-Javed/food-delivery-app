import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import StyledTypography from "@/components/Text/StyledTypography";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="rounded-b-xl flex justify-between items-center h-[64px] mt-0 md:mt-10">
      <div className="hidden md:block">
        <Link href="/">
          <Image
            src={"/assets/Global/logo.svg"}
            width={185}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex md:hidden w-full">
        <div className="flex md:hidden h-[77px] bg-custom-orange justify-start w-1/2 p-5 items-center ">
          <Avatar
            alt="profile"
            src="/assets/Global/location.svg"
            className="ml-1"
          />
          <StyledTypography
            text="Name"
            className="text-[14px] font-semibold  ml-5 text-black"
          />
        </div>
        <div className="bg-custom-green items-center justify-center flex w-1/2">
          <div className="p-3">
            <Image
              src={"/assets/LandingPage/cart.svg"}
              alt="cart"
              width={45}
              height={100}
            />
          </div>
        </div>
      </div>

      <div>
        <nav className="flex justify-center items-center gap-7">
          <div className="hidden md:block">
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
          <div className="bg-custom-green rounded-lg items-center justify-center hidden md:flex ">
            <div className="p-3">
              <Image
                src={"/assets/Global/Full Shopping Basket.svg"}
                alt="cart"
                width={25}
                height={100}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
