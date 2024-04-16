import React from "react";
import Image from "next/image";
import { Images } from "../../assets";

export const LoginPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Image src={Images.login} width={400} alt="Image" />
      </div>
      <div className="flex flex-col p-10 w-1/5">
        <h1 className="font-semibold text-3xl mb-10">Login</h1>

        <form>
          <div className="flex flex-col">
            <label className="text-gray-500">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="mb-4 h-10 w-full bg-gray-100 rounded-md p-2"
            />
            <label className="text-gray-500">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mb-4 h-10 w-full bg-gray-100 rounded-md p-2"
            />
          </div>
        </form>
        <div>
          <div className="flex justify-between items-center mb-5">
            <div className="flex">
              <input type="checkbox" />
              <p className="text-xs">&nbsp;&nbsp;Keep me logged in</p>
            </div>
            <div>
              <p className="text-xs">Forgot Password?</p>
            </div>
          </div>
          <button className="w-full h-10 bg-[#FC8A06] rounded-md  text-white font-semibold">
            Log In
          </button>
          <div className="flex mt-4">
            <p className="text-gray-500">Dont Have An Account?&nbsp;</p>
            <p className="font-bold ">Signup</p>
          </div>
        </div>
      </div>
    </div>
  );
};
