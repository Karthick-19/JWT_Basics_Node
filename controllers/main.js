const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  //Usually provided by the Database
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  if (!username || !password) {
    throw new BadRequestError("Please provide Username and Password");
  }
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const LuckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hi ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${LuckyNumber}`,
  });
  // console.log(token);
};

module.exports = {
  login,
  dashboard,
};
