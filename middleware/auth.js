const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  //Picking the jwt token provided in the header
  const authHeader = req.headers.authorization;
  //Checking if auth token is present in the correct format
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("JWT Token not provided");
  }
  //Taking the exact token (without Bearer) to verify (decode)
  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decodedToken;
    req.user = { id, username };
    next();
    // console.log(decodedToken);
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

module.exports = authMiddleware;
