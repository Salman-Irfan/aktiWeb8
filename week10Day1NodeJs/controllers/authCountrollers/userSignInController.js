const User = require("../../models/userModel")
const bcrypt = require('bcrypt')

const userSignInController = async (req, res) => {

    const { email, password } = req.body
    console.log(email)
    console.log(password)

    const existingUser = await User.findOne({
        userEmail: email
    })
    // if not email exists
    if (!existingUser) {
        return res.json({
            success: false,
            messasge: `email not found`
        })
    }

    // if user with the email is found then we'll check the password
    const hashedPassword = existingUser.userPassword; // draona password
    // Load hash from your password DB.
    const isPasswordMatched = bcrypt.compareSync(password, hashedPassword);
    // if user exists, check for pasword
    if (!isPasswordMatched) {
        return res.json({
            success: false,
            message: 'Incorrect email or password'
        })
    }

    // then only  email and password 
    return res.json({
        success: true,
        message: `login successful`
    })

}

module.exports = userSignInController
