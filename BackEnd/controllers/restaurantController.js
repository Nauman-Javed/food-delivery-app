const getRestaurants = (req, res) => {
  res.status(200).json({ message: "Get Restaurants" });
};

module.exports = {
  getRestaurants,
};
