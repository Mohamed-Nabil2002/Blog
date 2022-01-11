const express = require("express")
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");
const bcript = require("bcrypt");


router.get("/:id", async (req, res, next) => {
    try {
        const users = await User.findById(req.params.id)
        const {password, ...others} = users._doc
        res.status(200).send(others)
    } catch (error) {
        res.status(500).send();
        next()
    }
})

router.get("/", async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json("There's Not Users Exist");
    }
})

router.post("/", async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newPost.save();
        res.status(200).send(newUser)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put("/:id", async (req, res, next) => {
    if (req.body.userID === req.params.id) {
        if (req.body.password) {
            req.body.password = await bcript.hash(req.body.password, 8)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {
                new: true
            })
            res.status(200).send(updatedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(401).json("You Can Update Only Your Posts")
    }

})


router.delete("/:id", async (req, res, next) => {
    if (req.body.userID === req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id, {
                    new: true
                })
                res.status(200).send(deletedUser)
            } catch (error) {
                res.status(500).json(error)
            }
        } catch (error) {
            res.status(401).json("User Not Found")
        }
    } else {
        res.status(401).json("You Can Delete Only Your Posts")
    }

})


module.exports = router