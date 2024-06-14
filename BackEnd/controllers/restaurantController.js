const getRestaurants = (req, res) => {
  res.status(200).json({ message: "Get Restaurants" });
};

const getRestaurantName = (req, res) => {
  res.status(200).json({ message: "Get Restaurant Name" });
};

const getRestaurantFoodItems = (req, res) => {
  res.status(200).json({ message: "Get Restaurant Food Items" });
};

module.exports = {
  getRestaurants,
  getRestaurantName,
  getRestaurantFoodItems,
};
