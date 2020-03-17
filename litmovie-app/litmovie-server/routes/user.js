const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { registerValidation, loginValidation } = require("../routes/validation");
const { auth } = require("../middleware/auth");
const bcrypt = require("bcrypt");
//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

router.post("/register", async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.json({ status: false, message: error.details[0].message });

    //check if the user is already in database
    const emailExist = await User.findOne({ email: req.body.email.toLowerCase() });
    if (emailExist) return res.json({ status: false, message: "Email already exists" });
    //Hash the passwords
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        password: hashpassword,
        lastname: req.body.lastname,
        role: 1
    });

    try {
        const savedUser = await user.save();
        res.json({ status: true, user: savedUser._id });
    } catch (err) {
        res.json({ status: false, message: 'Error Occured' });
    }
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;