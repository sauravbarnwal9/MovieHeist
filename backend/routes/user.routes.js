const {Router}=require('express')
const { signup, login } = require('../controller/user.controller')
const { dataExist } = require('../middlewares/dataExist')
const { SignUpValidator } = require('../validator/signup.validator')
const {loginValidator}=require('../validator/login.validator')
const User=Router()

User.post("/signup",dataExist,SignUpValidator,signup)
User.post('/login',loginValidator,login)
