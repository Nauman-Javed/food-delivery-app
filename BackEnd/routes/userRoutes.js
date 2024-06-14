const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/restaurantController");

router.get("/", registerUser);
router.get("/login", loginUser);
router.get("/:user", getUser);

module.exports = router;
