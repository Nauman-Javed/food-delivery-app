import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="rounded-b-xl flex justify-between items-center h-[64px] mt-10">
      <div>
        <Link href="/">
          <Image src={Images.logo} width={185} alt="logo" />
        </Link>
      </div>
      <div>
        <nav className="flex justify-center items-center gap-7">
          <Link
            href="/login"
            className="flex items-center gap-2 bg-black text-white rounded-full px-8 py-3"
          >
            <Image src={Images.user} width={30} alt="user" /> Login/Signup
          </Link>
          <div className="bg-custom-green rounded-lg flex items-center justify-center">
            <div className="p-3">
              <Image src={Images.basket} alt="cart" width={25} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
