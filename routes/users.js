"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var user_1 = require("../models/user");
var router = express.Router();
router.post('/Register', function (req, res) {
    var user = new user_1.default();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function (err, newUser) {
        if (err) {
            console.log(err);
        }
        else {
            res.end();
        }
        ;
    });
});
router.post('/Login/Local', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        res.status(400);
    }
    ;
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            res.status(400);
        }
        ;
        if (user) {
            return res.json({ token: user.generateJWT() });
        }
        ;
        return res.status(400);
    })(req, res, next);
});
exports.default = router;
