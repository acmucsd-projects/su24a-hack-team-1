const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const User = require('../models/user');

const signinController = async (req, res) => {

}

const signupController = async (req, res) => {
    if(req.body.googleAccessToken) {
    } else {
        
    }
}