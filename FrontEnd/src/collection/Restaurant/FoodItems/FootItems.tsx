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
        <ul className="flex gap-20 font-semibold">
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
            className="text-5xl font-bold mb-5"
          />
          <div className="flex gap-2 flex-wrap">
            {restaurantName?.foodItems.map((item) => {
              if (item.type == "Burgers") {
                return (
                  <div
                    className="w-1/3 h-[245px] shadow-xl rounded-2xl p-5 flex"
                    key={item.id}
                  >
                    <div className="w-1/2 h-full flex flex-col justify-between  py-6">
                      <StyledTypography
                        text={item.name}
                        className="text-xl font-semibold cursor-default"
                      />
                      <StyledTypography
                        text={item.description}
                        className=" text-xs font-normal cursor-default"
                      />
                      <StyledTypography
                        text={`PKR ${item.price}`}
                        className="text-base font-bold cursor-default"
                      />
                    </div>
                    <div className="w-1/2 ">
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt="item Image"
                          width={203}
                          height={203}
                        />
                        <div className="absolute bottom-0 right-0 z-1">
                          <Image
                            src={"/assets/RestaurantPage/plusBackground.svg"}
                            alt="plus Background"
                            width={88}
                            height={88}
                          />
                          <div className="absolute z-2 top-5 right-4">
                            <Image
                              src={"/assets/RestaurantPage/plus.svg"}
                              alt="plus Background"
                              width={49}
                              height={49}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else return null;
            })}
          </div>
        </div>
      ) : null}
      {activeMenu.name === "All" || activeMenu.name === "Fries" ? (
        <div className="mt-10">
          <StyledTypography text="Fries" className="text-5xl font-bold mb-5" />
          <div className="flex gap-2 flex-wrap">
            {restaurantName?.foodItems.map((item) => {
              if (item.type == "Fries") {
                return (
                  <div
                    className="w-1/3 h-[245px] shadow-xl rounded-2xl p-5 flex"
                    key={item.id}
                  >
                    <div className="w-1/2 h-full flex flex-col justify-between py-6">
                      <StyledTypography
                        text={item.name}
                        className="text-xl font-semibold cursor-default"
                      />
                      <StyledTypography
                        text={item.description}
                        className=" text-xs font-normal cursor-default"
                      />
                      <StyledTypography
                        text={`PKR ${item.price}`}
                        className="text-base font-bold cursor-default"
                      />
                    </div>
                    <div className="w-1/2 ">
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt="item Image"
                          width={203}
                          height={203}
                        />
                        <div className="absolute bottom-0 right-0 z-1">
                          <Image
                            src={"/assets/RestaurantPage/plusBackground.svg"}
                            alt="plus Background"
                            width={88}
                            height={88}
                          />
                          <div className="absolute z-2 top-5 right-4">
                            <Image
                              src={"/assets/RestaurantPage/plus.svg"}
                              alt="plus Background"
                              width={49}
                              height={49}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else return null;
            })}
          </div>
        </div>
      ) : null}

      {activeMenu.name === "All" || activeMenu.name === "Juices" ? (
        <div className="mt-10">
          <StyledTypography text="Juices" className="text-5xl font-bold mb-5" />
          <div className="flex gap-2 flex-wrap">
            {restaurantName?.foodItems.map((item) => {
              if (item.type == "Juices") {
                return (
                  <div
                    className="w-1/3 h-[245px] shadow-xl rounded-2xl p-5 flex justify-between"
                    key={item.id}
                  >
                    <div className="w-1/2 h-full flex flex-col justify-between py-6">
                      <StyledTypography
                        text={item.name}
                        className="text-xl font-semibold cursor-default"
                      />
                      <StyledTypography
                        text={item.description}
                        className=" text-xs font-normal cursor-default"
                      />
                      <StyledTypography
                        text={`PKR ${item.price}`}
                        className="text-base font-bold cursor-default"
                      />
                    </div>
                    <div className="w-1/2 ">
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt="item Image"
                          width={203}
                          height={203}
                        />
                        <div className="absolute bottom-0 right-0 z-1">
                          <Image
                            src={"/assets/RestaurantPage/plusBackground.svg"}
                            alt="plus Background"
                            width={88}
                            height={88}
                          />
                          <div className="absolute z-2 top-5 right-4">
                            <Image
                              src={"/assets/RestaurantPage/plus.svg"}
                              alt="plus Background"
                              width={49}
                              height={49}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else return null;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
