const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//add API routes here
router.get('/user', userController.getUsers);
router.post('/login', userController.createUser);

module.exports = router;