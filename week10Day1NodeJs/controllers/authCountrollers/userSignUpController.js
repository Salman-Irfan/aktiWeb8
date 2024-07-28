const appConfig = require("../../config/appConfig")
const User = require("../../models/userModel")
const bcrypt = require('bcrypt')
const userSignUpController = async (req, res) => {

    try {
        const { userName, userAge, userEmail, userPassword } = req.body

        const existingUser = await User.findOne({
            userEmail: userEmail
        })

        // if user exists, simply return with error message
        if (existingUser) {
            return res.json({
                success: false,
                message: `email already exists`
            })
        }

        // hash its password, and save the hased paswword in db
        // Making the password hash i.e encryption
        const SALT_ROUNDS = +appConfig.SALT_ROUNDS // + is a shorthand of parseint
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        const hashedPassword = bcrypt.hashSync(userPassword, salt);

        // it responsible for making a new user
        const user = new User({
            userName: userName,
            userAge: userAge,
            userEmail: userEmail,
            userPassword: hashedPassword,
        })
        const userResponse = await user.save()

        return res.json({
            success: true,
            userResponse
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }


}

module.exports = userSignUpController