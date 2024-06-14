const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/restaurants", require("./routes/restaurantRoutes"));
app.use("/user", require("./routes/userRoutes"));

app.use("*", (req, res) => {
  res.send({ message: "Invalid URL" });
});

app.listen(PORT, () => {
  console.log("Server Running on", { PORT });
});
