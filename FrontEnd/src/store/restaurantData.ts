export interface RestaurantState {
  name: string;
  image: string;
  slug: string;
  path: string;
  foodItems: FoodItem[];
}
export interface FoodItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const restaurantData: RestaurantState[] = [
  {
    name: "McDonald's",
    image: "/assets/RestaurantNames/mcdonalds.svg",
    slug: "mc",
    path: "/restaurant",
    foodItems: [
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
    ],
  },
  {
    name: "Papa Johns",
    image: "/assets/RestaurantNames/papaJohns.svg",
    slug: "pj",
    path: "/restaurant",
    foodItems: [
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
    ],
  },
  {
    name: "KFC",
    image: "/assets/RestaurantNames/KFC.svg",
    slug: "kfc",
    path: "/restaurant",
    foodItems: [
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
    ],
  },
  {
    name: "Texas Chicken",
    image: "/assets/RestaurantNames/texas.svg",
    slug: "tc",
    path: "/restaurant",
    foodItems: [
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
    ],
  },
  {
    name: "Burger King",
    image: "/assets/RestaurantNames/burgerKing.svg",
    slug: "bk",
    path: "/restaurant",
    foodItems: [
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
    ],
  },
  {
    name: "Shaurma",
    image: "/assets/RestaurantNames/Shaurma.svg",
    slug: "s",
    path: "/restaurant",
    foodItems: [
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
      {
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium fries",
        price: 23.1,
        image: "/assets/RestaurantPage/foodItemLogo.svg",
      },
    ],
  },
];
