import { create } from "zustand";
import { restaurantData, RestaurantProps } from "./restaurantData";

interface RestaurantStoreProps {
  restaurant: RestaurantProps[];
  findRestaurant: (slug: string) => RestaurantProps | undefined;
}

export const useRestaurantStore = create<RestaurantStoreProps>((set) => ({
  restaurant: restaurantData,
  findRestaurant: (slug: string) => {
    const foundRestaurant = restaurantData.find(
      (restaurant) => restaurant.slug === slug
    );
    return foundRestaurant;
  },
}));
