"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
;
var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    content: {
        type: String,
        required: true,
    },
    owner_id: {
        type: String,
    },
});
exports.default = mongoose.model('Blog', blogSchema);
