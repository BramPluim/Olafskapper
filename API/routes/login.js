const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const Joi = require('joi');

// login

router.post('/login', async (req, res) => {

    console.log(req.body);

    res.send('login called');
});

module.exports = router;