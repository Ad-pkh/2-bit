const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
   
    resetPasswordToken: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});
userSchema.methods.comparePassword = async function (Password) {
  try {
    return await bcrypt.compare(Password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};
userSchema.methods.generatesAccessToken = async function () {
  return jwt.sign({ id: this._id }, process.env.RefreshTokenSecret, {
    expiresIn: "2h",
  });
};
userSchema.methods.generatesRefreshToken = async function () {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.RefreshTokenSecret,
    {
      expiresIn: "2h",
    }
  );
};
exports.Users = mongoose.model("Users",  userSchema);