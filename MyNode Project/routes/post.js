const express = require("express")
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");
const bcript = require("bcrypt");

//get All Posts
router.get("/", async (req, res, next) => {
    console.log("object");
    try {
       let posts;
       //
       posts = await Post.find({}).populate("username")
        
       res.status(200).send(posts)
    } catch (error) {
        res.status(500).json(error);
    }
})


// router.get("/:id", async (req, res, next) => {
//     try {
//         const posts = await Post.findById(req.params.id)
//         const {
//             password,
//             ...others
//         } = posts._doc
//         res.status(200).send(others)
//     } catch (error) {
//         res.status(500).json(error);
//         next()
//     }
// })

router.post("/", async (req, res) => {
    const newPost = req.body;
    const username = req.user._id
    newPost.username = username;
    try {
        await Post.create(newPost);
        res.status(200).send(newPost)
    } catch (error) {
        res.status(400).json(error)
    }
})



router.put("/:id", async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        console.log(post.username);
        console.log(req.user._id);
        if (post.username.toString() === req.user._id.toString()) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, {
                    new: true
                });
                res.status(200).send(updatedPost);
            } catch (err) {
                res.status(401).json(err)
            }
        } else {
            res.status(401).json("You can update only Your post");
        }
    } catch (error) {
        res.status(401).json(error)
    }
})


router.delete("/:id", async (req, res, next) => {
        try {
            const post = await Post.findById(req.params.id)
            if (post.username.toString() === req.user._id.toString()) {
                try {
                    await post.delete()
                    res.json("Post has been deleted")
                } catch (error) {
                    res.status(500).json(error)
                }
            } 
            else {
                res.status(401).json("You Can Delete Only Your Post")
            }
        } catch (error) {
            res.status(401).json("User Not Found")
        }
    }
)


module.exports = router