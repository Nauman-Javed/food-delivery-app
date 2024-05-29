import create from "zustand";
import { restaurantData, RestaurantState } from "./restaurantData";

interface RestaurantStateProps {
  restaurant: RestaurantState | null;
  setRestaurant: (restaurant: RestaurantState) => void;
}

export const useRestaurantStore = create<RestaurantStateProps>((set) => ({
  restaurant:
    restaurantData.find((restaurant) => restaurant.slug === "default-slug") ||
    null,
  setRestaurant: (restaurant: RestaurantState) => set({ restaurant }),
}));
