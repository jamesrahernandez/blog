"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var mongoose = require("mongoose");
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');
passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Invalid Username' });
        }
        ;
        if (!user.validatePassword(password)) {
            return done(null, false, { message: 'Invalid Password' });
        }
        ;
        return done(null, user);
    });
}));
