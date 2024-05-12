import {
  Footer,
  Hero,
  Navbar,
  Ordering,
  PopularRestaurant,
  Promotion,
  Testimonial,
  Testing,
} from "@/collection";
import React from "react";

export const LandingPageContainer = () => {
  return (
    <main>
      <div className="max-w-[1528px] m-auto ">
        <Promotion />
        <Navbar />
        <Hero />
        <PopularRestaurant />
        <Ordering />
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};
