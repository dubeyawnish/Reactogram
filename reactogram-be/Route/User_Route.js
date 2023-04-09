
const express=require('express');
const mongoose =require('mongoose');
const bcryptjs=require('bcryptjs');



const router = express.Router();
const UserModel = mongoose.model('UserModel')

router.post("/signup", (req, res) => {
    const { fullName, email, password, profileImg } = req.body;
    if (!fullName || !password || !email) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }
    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (userInDB) {
                return res.status(500).json({ error: "User with this email already registered" });
            }
            bcryptjs.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new UserModel({ fullName, email, password: hashedPassword, profileImg });
                    user.save()
                        .then((newUser) => {
                            res.status(201).json({ result: "User Signed up Successfully!" });
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }).catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});



router.post("/login", (req, res) => {
    const {  email, password} = req.body;
    if ( !password || !email) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }
    UserModel.findOne({ email: email })
        .then((userInDB) => {  // in userInDB all data comes like email password fullname profile image everything
            if (!userInDB) {
                return res.status(401).json({ error: "Invalid Credentials" });
            }
            bcryptjs.compare(password, userInDB.password)// compare the password user enter and password form database
                .then((didMatch) => {
                    if(didMatch){
                        res.status(201).json({ result: "User Login Successfull" });
                    }
                    else{
                        return res.status(401).json({ error: "Invalid Credentials" });
                    }
                }).catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});




module.exports = router;