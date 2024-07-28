const express  = require ('express');
const userSignUpController = require('../../../../controllers/authCountrollers/userSignUpController');
const userSignInController = require('../../../../controllers/authCountrollers/userSignInController');
const authRouter = express.Router();


authRouter.post(`/sign-up`, userSignUpController)
authRouter.post(`/sign-in`, userSignInController)

module.exports= authRouter
