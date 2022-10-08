const { Router } = require("express");
const { signup, login } = require("../controller/user.controller");
const { SignUpValidator } = require("../validator/signup.validator");
const { loginValidator } = require("../validator/login.validator");
const { UserExist } = require("../middlewares/UserExist");
const User = Router();

User.post("/signup", SignUpValidator,UserExist, signup);
User.post("/login", loginValidator, login);
module.exports = {
  User,
};
