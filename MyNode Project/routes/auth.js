const express = require("express")
const User = require("../models/user")
const bcript = require("bcrypt")
const jwt = require("jsonwebtoken")

const router = express.Router()


// For Register
router.post("/register", async (req, res) => {
    try {
        const newUser =  new User({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password:  req.body.password
        })
        const user = await newUser.save();
        res.status(200).send(user)

    } catch (error) {
        res.status(500).json(error)
    }
})

//For Login
router.post("/login", async (req, res, next) => {
    console.log("user");
    try {
        console.log("user");
        const user = await User.findOne({username: req.body.username})

        !user && res.status(403).json("There's a Wrong")
        const isValidated = await bcript.compare(req.body.password, user.password)
        console.log(isValidated);
        if (isValidated) {
            const token = await jwt.sign(
                {
                  username:user.username,
                  _id: user._id,
                  maxAge: "2d",
                },
                "bjfklsdkfl"
              );
            res.json(token)
        } else {

            next("There's a Wrong")
        }
       
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;