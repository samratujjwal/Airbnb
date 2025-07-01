const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveredirectUrl } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const userController = require("../controllers/user.js");

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(userController.signup)

//router.get("/signup", userController.renderSignupForm);
//router.post("/signup", userController.signup);

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveredirectUrl, passport.authenticate("local",
        { failureRedirect: "/login", failureFlash: true })
        , wrapAsync(userController.login));
//router.get("/login", userController.renderLoginForm);

// router.post("/login", saveredirectUrl, passport.authenticate("local",
//     { failureRedirect: "/login", failureFlash: true })
//     , wrapAsync(userController.login));

router.get("/logout", userController.logout);
module.exports = router;