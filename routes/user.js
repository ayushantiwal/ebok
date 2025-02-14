var express = require('express');
var router = express.Router();
var csrf = require("csurf");
var passport = require("passport");
var Order = require("../models/order");
var Cart = require("../models/cart");



var csrfProtection = csrf();
router.use(csrfProtection);

router.use("/", notLoggedIn, function (req, res, next) {
	next();
})

router.get("/signup", function (req, res, next) {
	var messages = req.flash('error');
	res.render("user/signup", { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })
});


router.post("/signup", passport.authenticate('local.signup', {
	successRedirect: '/user/profile',
	failureRedirect: '/user/signup',
	failureFlash: true
}));

router.get("/signin", function (req, res, next) {
	var messages = req.flash('error');
	res.render("user/signin", { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })
});

router.post("/signin", passport.authenticate('local.signin', {
	successRedirect: '/profile',
	failureRedirect: '/signup',
	failureFlash: true
}));

router.get("/logout", function (req, res, next) {
	req.logout();
	res.redirect("/");
});


module.exports = router;

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect("/user/signup");
}


function notLoggedIn(req, res, next) {
	if (!req.isAuthenticated()) {
		return next();
	}

	res.redirect("/");
}