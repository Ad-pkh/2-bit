const  {Users}  =require ('../models/Users.model')
const jwt = require("jsonwebtoken");
const { SendMail } = require("../utils/mailsent");
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await Users.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const accessToken = await user.generatesAccessToken();
    const refreshToken = await user.generatesRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.CreateUsers = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (
      [email, username, password].some((field) => !field || field.trim() === "")
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existedUser = await Users.findOne({ $or: [{ email }, { username }] });
    if (existedUser) {
      return res
        .status(409)
        .json({ message: "User with this email or username already exists." });
    }

    const user = new Users({
      email: email,
      username: username,
      password: password,
    });
    await user.save();

    const findUser = await Users.findById(user._id).select(
      "-password -resetPasswordToken"
    );
    if (!findUser) {
      return res
        .status(500)
        .json({ message: "Something went wrong while fetching the user." });
    }

    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "email or password is Required",
      });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with these email does,t exist !!" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid users credentials",
      });
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie("access_token", accessToken, options)
      .cookie("refresh_Token", refreshToken, options)
      .json({
        user: user,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.logoutUsers = async (req, res) => {
  try {
    await Users.findByIdAndUpdate(
      req.user?.id,
      { $set: { refreshToken: undefined } },
      { new: true }
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .clearCookie("access_token", options)
      .clearCookie("refresh_Token", options)
      .json({
        message: "user logout SuccessFully",
      });
    // res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
exports.refreshaccessToken = async (req, res) => {
  const incommingRefreshToken = req.cookie["refresh_Token"];
  if (!incommingRefreshToken) return null;
  const decodedToken = jwt.verify(
    incommingRefreshToken,
    process.env.RefreshTokenSecret
  );
  const user = await Users.findById(decodedToken?.id);
  if (!user) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  if (incommingRefreshToken !== user?.refreshToken) {
    return res.status(400).json({
      message: "Refresh Token is Expired",
    });
  }
  const options = {
    httpOnly: true,
    secure: true,
  };
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  return res
    .status(200)
    .cookie("access_token", accessToken, options)
    .cookie("refresh_Token", refreshToken, options)
    .json({
      accessToken,
      refreshToken,
    });
};
// checkUsers
exports.checkUser = async (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
  }
};

exports.updateUserAddress = async (req, res) => {
  try {
    const { id } = req.user;
    console.log(req.body);
    const user = await Users.findById(id);
    if (!user) {
      return res.status(400).json({ message: "Invalid User !." });
    }
    const updateAddress = await Users.findByIdAndUpdate(
      id,
      {
        $set: {
          addresses: req.body.addresses,
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Address UpdateSuccessFully!", updateAddress });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.ResetPasswordLink = async (req, res) => {
  try {
    const { email } = req.body;
    const isEmailExist = await Users.findOne({ email: email });
    if (isEmailExist) {
      const resetPasswordToken = await jwt.sign(
        { email: email },
        process.env.RefreshTokenSecret,
        {
          expiresIn: "2h",
        }
      );
      isEmailExist.resetPasswordToken = resetPasswordToken;
      await isEmailExist.save({ validateBeforeSave: false });
      const subject = "Password-Reset";
      const path =
        "http://localhost:5173/set-new-password?token=" + resetPasswordToken;
      const html = `<p> Please click here to reset your Password <a href="${path}"> click here</a>  </p>`;
      const response = await SendMail({ to: email, subject, html });
      return res.status(200).json(response);
    } else {
      return res.status(400).json({ message: "Invalid Email Address !" });
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
