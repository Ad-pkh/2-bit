const jwt = require("jsonwebtoken");
const {Users} = require("../models/Users.model");
exports.verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies["access_token"] ||req.header("Authorization").replace("Bearer ", "")
    
    if (!token) {
      return res.status(400).json({
        message: "Unauthorize request",
      });
    }
    const decodedToken = jwt.verify(token, process.env.RefreshTokenSecret);
    const user = await Users.findById(decodedToken?.id).select(
      "-password -refreshToken"
    );
    if (!user) {
      return res.status(401).json({
        message: "Invalid Access Token",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
};
