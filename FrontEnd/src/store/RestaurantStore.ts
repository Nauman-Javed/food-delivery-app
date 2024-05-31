import { create } from "zustand";
import { restaurantData, RestaurantState } from "./restaurantData";

interface RestaurantStateProps {
  restaurant: RestaurantState[];
  findRestaurant: (slug: string) => RestaurantState | undefined;
}

export const useRestaurantStore = create<RestaurantStateProps>((set) => ({
  restaurant: restaurantData,
  findRestaurant: (slug: string) => {
    const foundRestaurant = restaurantData.find(
      (restaurant) => restaurant.slug === slug
    );
    return foundRestaurant;
  },
}));
