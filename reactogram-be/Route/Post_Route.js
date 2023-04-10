const express = require('express');
const mongoose = require('mongoose');
const protectedResoure = require("../Middleware/protectedResource");

const PostModel = mongoose.model('PostModel');
const router = express.Router();



// get all post 
router.get('/allposts',(req,res)=>{
    PostModel.find()
    .populate("author","_id fullName profileImg")
    .then((dbPosts)=>{
      res.status(200).json({author:dbPosts})
    })
    .catch((error)=>{
        console.log(error);
    })
});


// get all post of logged in user 
router.get('/myallposts',protectedResoure,(req,res)=>{
    PostModel.find({author:req.user._id})
    .populate("author","_id fullName profileImg")
    .then((dbPosts)=>{
      res.status(200).json({author:dbPosts})
    })
    .catch((error)=>{
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

module.exports = router;