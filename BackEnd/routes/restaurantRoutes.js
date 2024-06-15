const express = require("express");
const router = express.Router();
const {
  getRestaurants,
  getRestaurantName,
  getRestaurantFoodItems,
} = require("../controllers/restaurantController");

router.get("/", getRestaurants);
router.get("/:slug", getRestaurantName);
router.get("/:slug/food-items", getRestaurantFoodItems);

module.exports = router;
