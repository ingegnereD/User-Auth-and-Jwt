const asyncHandler = require('express-async-handler')
const User = require("../model/userModel")
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler(async(req, res) => {
    const userInfo = req.body
    const user = await User.create(userInfo)
    if (user) {
        res.status(200).json({ _id: user._id, name: user.name, email: user.email, password: user.password, token: generateToken(user._id) })
    } else {
        throw new Error("Failed to create user, check email.")
    }
})

const getAllUser = asyncHandler(async(req, res) => {
    const user = await User.find({})
    res.status(200).json({ nbHit: user.length, user, jwt: generateToken(user._id) })
})

const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user && (user.matchPassword(password))) {
        res.status(200).json({ user, token: generateToken(user._id) })
    } else {
        throw new Error({ msg: "Incorrect  Email or Password" })
    }
})


module.exports = { registerUser, getAllUser, authUser }