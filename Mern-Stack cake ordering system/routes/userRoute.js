const express = require("express");
const router = express.Router();
const User = require('../models/userModels'); // Updated import

router.post("/register", async (req, res) => {

    const{name,email,password} = req.body

    const newUser = new User({name,email,password})


    try {
        newUser.save()
        res.send('User Registration succesfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password }); // Use findOne instead of find
        if (user) {
            const currentUser = {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id
            };
            res.send(currentUser);
        } else {
            return res.status(400).json({ message: "User login failed" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});

module.exports = router;


module.exports = router;