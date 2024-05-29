import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RestaurantProps {
  image: string;
  slug: string;
  path: string;
}

const Restaurants = (props: RestaurantProps) => {
  const { image, slug, path } = props;
  return (
    <Link href="/restaurant">
      <div className="w-[150px] sm:w-[150px] md:w-[238px]">
        <Image
          src={image}
          alt=""
          width={238}
          height={10}
          className="w-[350px] md:w-[238px]"
        />
      </div>
    </Link>
  );
};

export default Restaurants;
