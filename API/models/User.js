// user model
const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        isAdmin: this.isAdmin
    }, config.get('jwtPrivateKey'));
    return token;
};
const User = mongoose.model('User', userSchema);

module.exports.User = User;