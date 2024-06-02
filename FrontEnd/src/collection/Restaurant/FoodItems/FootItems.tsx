import { FootItemCard } from "@/components/FoodItemCard/FootItemCard";
import StyledTypography from "@/components/Text/StyledTypography";
import { useRestaurantStore } from "@/store/RestaurantStore";
import { RestaurantProps } from "@/store/restaurantData";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface footItemsProps {
  id: number;
  name: string;
}

const menu: footItemsProps[] = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Burgers",
  },

  {
    id: 3,
    name: "Fries",
  },
  {
    id: 4,
    name: "Juices",
  },
];

export const FoodItems = () => {
  const [activeMenu, setActiveMenu] = useState<footItemsProps>(menu[0]);

  const [restaurantName, setRestaurantName] =
    useState<RestaurantProps | null>();

  const { findRestaurant } = useRestaurantStore();

  useEffect(() => {
    if (slug) {
      const restaurantFound = findRestaurant(slug as string);
      if (restaurantFound) {
        setRestaurantName(restaurantFound);
      }
    }
  }, []);

  const router = useRouter();
  const { slug } = router.query;

  const handleActiveMenu = (name: string) => {
    const selectedMenu = menu.find((item) => item.name === name);
    if (selectedMenu) {
      setActiveMenu(selectedMenu);
    }
  };

  return (
    <div className="mt-10 mx-3 md:mx-0 ">
      <div className="bg-[#F3F3F3] flex justify-center items-center p-5 rounded-xl ">
        <ul className="flex gap-10 md:gap-20 font-semibold">
          {menu.map((menuItem) => {
            return (
              <li
                key={menuItem.id}
                className={`cursor-pointer p-1 rounded ${
                  activeMenu.id === menuItem.id
                    ? "bg-black text-white rounded-full px-5"
                    : ""
                } `}
                onClick={() => handleActiveMenu(menuItem.name)}
              >
                {menuItem.name}
              </li>
            );
          })}
        </ul>
      </div>
      {activeMenu.name === "All" || activeMenu.name === "Burgers" ? (
        <div className="mt-10">
          <StyledTypography
            text="Burgers"
            className="text-3xl md:text-5xl font-bold mb-5 text-center md:text-start"
          />
          <div className="flex flex-wrap md:gap-[4%] lg:gap-[2%]">
            {restaurantName?.foodItems.map((item) => {
              if (item.type == "Burgers") {
                return (
                  <FootItemCard
                    id={item.id}
                    description={item.description}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                );
              } else return null;
            })}
          </div>
        </div>
      ) : null}
      {activeMenu.name === "All" || activeMenu.name === "Fries" ? (
        <div className="mt-10">
          <StyledTypography
            text="Fries"
            className="text-3xl md:text-5xl font-bold mb-5 text-center md:text-start"
          />
          <div className="flex flex-wrap md:gap-[4%] lg:gap-[2%]">
            {restaurantName?.foodItems.map((item) => {
              if (item.type == "Fries") {
                return (
                  <FootItemCard
                    id={item.id}
                    description={item.description}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                );
              } else return null;
            })}
          </div>
        </div>
      ) : null}
      {activeMenu.name === "All" || activeMenu.name === "Juices" ? (
        <div className="mt-10">
          <StyledTypography
            text="Juices"
            className="text-3xl md:text-5xl font-bold mb-5 text-center md:text-start"
          />
          <div className="flex flex-wrap md:gap-[4%] lg:gap-[2%]">
            {restaurantName?.foodItems.map((item) => {
              if (item.type == "Juices") {
                return (
                  <FootItemCard
                    id={item.id}
                    description={item.description}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                );
              } else return null;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
