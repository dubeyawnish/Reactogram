const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const mongoose = require('mongoose');
const UserModel = mongoose.model("UserModel");



//this middleware is used to unauthorized user cannot acces every pages only authorized user can see all pages
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // Bearer dsffsdfhsdfufsfjf
    if (!authorization) {
        return res.status(401).json({ error: "user not logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET, (error, payload) => {
        if (error) {
            return res.status(401).json({ error: "user not logged in" });
        }
        const { _id } = payload;
        UserModel.findById(_id)
            .then((userDb) => {
                req.user = userDb;
                next();//goes to next middleware or goes to restapi
            })
    });

}