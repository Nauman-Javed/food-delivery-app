import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import StyledTypography from "@/components/Text/StyledTypography";
import { Badge } from "@mui/material";
import { CustomStepper } from "@/components/CustomStepper/CustomStepper";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
          <Link
            href="/profile"
            className="flex md:hidden h-[77px] bg-custom-orange justify-start w-1/2 p-5 items-center "
          >
            <Avatar
              alt="profile"
              src="/assets/Global/location.svg"
              className="ml-1"
            />
            <StyledTypography
              text="Name"
              className="text-[14px] font-semibold  ml-5 text-black"
            />
          </Link>

          <div
            className="bg-black items-center justify-center flex w-1/2"
            onClick={handleOpen}
          >
            <div>
              <Badge badgeContent={4} color="info">
                <Image
                  src={"/assets/LandingPage/cart.svg"}
                  alt="cart"
                  width={45}
                  height={100}
                />
              </Badge>
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
            <div
              className="bg-black rounded-lg items-center justify-center hidden md:flex cursor-pointer"
              onClick={handleOpen}
            >
              <div className="p-3">
                <Badge badgeContent={4} color="info">
                  <Image
                    src={"/assets/Global/Full Shopping Basket.svg"}
                    alt="cart"
                    width={25}
                    height={100}
                  />
                </Badge>
              </div>
            </div>
            <div>
              <CustomStepper handleClose={handleClose} open={open} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
