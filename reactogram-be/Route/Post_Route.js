const express = require('express');
const mongoose = require('mongoose');
const protectedResoure = require("../Middleware/protectedResource");

const PostModel = mongoose.model('PostModel');
const router = express.Router();

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