import React from "react";

export const Testimonial = () => {
  return (
    <div className="bg-custom-orange  rounded-md mt-16 h-[120px] flex justify-center items-center gap-52">
      <div className="flex flex-col justify-center items-center ">
        <p className="text-white font-normal text-5xl">546+</p>
        <p className="text-white font-bold text-lg">Registered Riders</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-normal text-5xl">789,900+</p>
        <p className="text-white font-normal"> Orders Delivered</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-normal text-5xl">690+</p>
        <p className="text-white font-normal">Restaurants Partnered</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-normal text-5xl">17,457+</p>
        <p className="text-white font-normal">Food items</p>
      </div>
    </div>
  );
};
