export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
  slug: string;
  path: string;
  foodItems: FoodItemProps[];
}
export interface FoodItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
}

export const restaurantData: RestaurantProps[] = [
  {
    id: "m1",
    name: "McDonald's",
    image: "/assets/RestaurantNames/mcdonalds.svg",
    slug: "mc",
    path: "/restaurant",
    foodItems: [
      {
        id: "i1",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i2",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i3",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i4",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i5",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i6",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i7",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i8",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i9",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i10",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i11",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i12",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i13",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i14",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i15",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i16",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i17",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i18",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i19",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i20",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i21",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i22",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
    ],
  },
  {
    id: "m2",
    name: "Papa Johns",
    image: "/assets/RestaurantNames/papaJohns.svg",
    slug: "pj",
    path: "/restaurant",
    foodItems: [
      {
        id: "i1",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i2",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i3",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i4",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i5",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i6",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i7",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i8",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i9",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i10",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i11",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i12",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i13",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i14",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i15",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i16",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i17",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i18",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i19",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i20",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i21",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i22",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
    ],
  },
  {
    id: "m3",
    name: "KFC",
    image: "/assets/RestaurantNames/KFC.svg",
    slug: "kfc",
    path: "/restaurant",
    foodItems: [
      {
        id: "i1",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i2",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i3",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i4",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i5",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i6",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i7",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i8",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i9",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i10",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i11",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i12",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i13",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i14",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i15",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i16",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i17",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i18",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i19",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i20",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i21",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i22",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
    ],
  },
  {
    id: "m4",
    name: "Texas Chicken",
    image: "/assets/RestaurantNames/texas.svg",
    slug: "tc",
    path: "/restaurant",
    foodItems: [
      {
        id: "i1",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i2",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i3",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i4",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i5",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i6",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i7",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i8",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i9",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i10",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i11",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i12",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i13",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i14",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i15",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i16",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i17",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i18",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i19",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i20",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i21",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i22",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
    ],
  },
  {
    id: "m5",
    name: "Burger King",
    image: "/assets/RestaurantNames/burgerKing.svg",
    slug: "bk",
    path: "/restaurant",
    foodItems: [
      {
        id: "i1",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i2",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i3",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i4",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i5",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i6",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i7",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i8",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i9",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i10",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i11",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i12",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i13",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i14",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i15",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i16",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i17",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i18",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i19",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i20",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i21",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i22",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
    ],
  },
  {
    id: "m6",
    name: "Shaurma",
    image: "/assets/RestaurantNames/Shaurma.svg",
    slug: "s",
    path: "/restaurant",
    foodItems: [
      {
        id: "i1",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i2",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i3",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i4",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i5",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i6",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i7",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i8",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/burgerLogo.svg",
        type: "Burgers",
      },
      {
        id: "i9",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i10",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i11",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i12",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i13",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i14",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i15",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/fries.svg",
        type: "Fries",
      },
      {
        id: "i16",
        name: "Royal Cheese Burger with extra Fries",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i17",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i18",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i19",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i20",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i21",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
      {
        id: "i22",
        name: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: 23.1,
        image: "/assets/RestaurantPage/Juices.svg",
        type: "Juices",
      },
    ],
  },
];
