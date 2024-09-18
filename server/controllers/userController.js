const UserInfo = require('../models/User');

// Controller for our GET request
//fetches all users from the database
const getUsers = async (req, res) => {
    const { email } = req.body;
    let user = await UserI.findOne({ email: email });
    res.status(200).json(user);
}

// Controller for our POST request
// Creates a new user in the database
const createUser = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            message: 'email is required'
        });
    }

    let user = await UserInfo.findOne({ email: email }).exec();
    console.log(user);
    if (!user) {
        //if the user doesn't exist in the database
        const newUser = await UserInfo.create(req.body);
        console.log('User created successfully');
        user = newUser
    }

    res.status(200).json(user);
}


module.exports = { getUsers, createUser };