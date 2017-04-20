"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
;
var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        owner_id: String,
    },
    content: {
        type: String,
        required: true,
    },
});
exports.default = mongoose.model('Blog', blogSchema);
