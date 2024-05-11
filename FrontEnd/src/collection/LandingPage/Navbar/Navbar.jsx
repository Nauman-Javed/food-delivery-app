import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="rounded-b-xl flex justify-between items-center h-[64px] mt-10">
      <div>
        <Image src={Images.logo} width={185} alt="logo" />
      </div>
      <div>
        <nav>
          <ul className="flex justify-center items-center gap-16">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Browse Menu</Link>
            </li>
            <li>
              <Link href="/contact">Special Offers</Link>
            </li>
            <li>
              <Link href="/contact">Restaurants</Link>
            </li>
            <li>
              <Link href="/contact">Track Order</Link>
            </li>
            <Link
              href="/login"
              className="flex items-center gap-2 bg-black text-white rounded-full px-5 py-2"
            >
              <Image src={Images.user} width={30} alt="user" /> Login/Signup
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};
