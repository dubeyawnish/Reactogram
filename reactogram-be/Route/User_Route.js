
const express=require('express');
const mongoose =require('mongoose');
const bcryptjs=require('bcryptjs');



const router = express.Router();
const UserModel = mongoose.model('userModel')

router.post('/signup', (req, res) => {
    const { fullName, email, password, profileImg } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "one or more filds are empty!" });
    }

    UserModel.findOne({ email: email })
        .then((userInDb) => {
            if (userInDb) {
                return res.status(500).json({ error: " User with this email id already exist!" });

            }

            bcryptjs.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new UserModel({ fullName, email, password: hashedPassword, profileImg }) // password name is different so for this it is written like thiss
                    user.save()
                        .then((newUser) => {
                            return res.status(201).json({ result: "User Signup Successfully!" });

                        })
                        .catch((err) => {
                            console.log(err);
                        });


                })
                .catch((err) => {
                    console.log(err);
                });

        })
        .catch((err) => {
            console.log(err);
        });

})

module.exports = router;