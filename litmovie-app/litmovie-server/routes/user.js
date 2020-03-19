const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { registerValidation, loginValidation } = require("../routes/validation");
const { auth } = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken')
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
    const hashpassword = bcrypt.hashSync(req.body.password, salt);
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

router.post("/login", async (req, res) => {

    const user = await User.findOne({ email: req.body.elegantFormEmailEx.toLowerCase() });
    if (!user) return res.json({ status: false, message: "Email not found" });
    //Password is correct
    console.log(req.body.elegantFormPasswordEx)
    const salt = await bcrypt.genSalt(10);
    const hashpassword = bcrypt.hashSync(req.body.elegantFormPasswordEx, salt);
    console.log(hashpassword)

    const validpass = bcrypt.compareSync(req.body.elegantFormPasswordEx, user.password);
    console.log(user.password)
    if (!validpass) return res.json({ status: false, message: 'Invalid Password' });
    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    user.token = token;
    user.save(function (err, user) {
        if (err) return res.status(400).send(err);
        //  res.send(null, user);
    })
    res.cookie("w_authExp", user.tokenExp);
    res.header('auth-token', token)
    res.cookie("auth", token, { maxAge: 1000 * 60 * 10, httpOnly: false })
    console.log(res.cookie.get)
    res.json({ status: true, token: token, userId: user._id });
});


router.get("/logout/:userId", (req, res) => {
    console.log('logout handler method from server error' + req.params.userId)

    User.findOneAndUpdate({ _id: req.params.userId }, { token: "", tokenExp: "" }, (err, doc) => {

        if (err) return res.json({ success: false, err });
        console.log('logout handler method from server')

        return res.status(200).json({
            success: true
        });
    });
});

module.exports = router;