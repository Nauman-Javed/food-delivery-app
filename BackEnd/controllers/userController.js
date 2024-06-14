const registerUser = (req, res) => {
  res.status(200).json({ message: "Register User" });
};

const loginUser = (req, res) => {
  res.status(200).json({ message: "Login User" });
};

const getUser = (req, res) => {
  res.status(200).json({ message: "Get User" });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
