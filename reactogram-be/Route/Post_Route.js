const express = require('express');
const mongoose = require('mongoose');
const protectedResoure = require("../Middleware/protectedResource");

const PostModel = mongoose.model('PostModel');
const router = express.Router();



// get all post 
router.get('/allposts', (req, res) => {
    PostModel.find()
        .populate("author", "_id fullName profileImg")
        .then((dbPosts) => {
            res.status(200).json({ author: dbPosts })
        })
        .catch((error) => {
            console.log(error);
        })
});


// get all post of logged in user 
router.get('/myallposts', protectedResoure, (req, res) => {
    PostModel.find({ author: req.user._id })
        .populate("author", "_id fullName profileImg") // populate  means these data are also visible in responese
        .then((dbPosts) => {
            res.status(200).json({ author: dbPosts })
        })
        .catch((error) => {
            console.log(error);
        })
});


router.post('/createpost', protectedResoure, (req, res) => {
    const { description, location, image } = req.body;
    if (!description || !location || !image) {
        return res.status(400).json({ error: "one or more mandatory fileds are empty" });
    }
    req.user.password = undefined;
    const postObj = new PostModel({ description: description, location: location, image: image, author: req.user });
    postObj.save()
        .then((newPost) => {
            res.status(201).json({ post: newPost });
        })
        .catch((error) => {
            console.log(error);
        })

});



router.delete("/deletepost/:postId", protectedResoure, (req , res) => {
    PostModel.findOne({ _id: req.params.postId })
        .populate("author", "_id")
        .then(( postFound) => {
            if ( !postFound) {
                return res.status(400).json({ result: "Post does not exist" });
            }
            //check if the post author is same as loggedin user only then allow deletion
            if (postFound.author._id.toString() === req.user._id.toString()) {
                postFound.remove()
                    .then((data) => {
                        res.status(200).json({ result: data });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })
        .catch((error)=>{
            return res.status(400).json({ error: "Post does not exist error" });
        });
});

module.exports = router;