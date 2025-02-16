const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const  { createUser } = require('../controllers/user');
const { updateUser } = require('../controllers/user');
const { login } = require ('../controllers/user');
const { logOut } = require('../controllers/user');
const { getUser } = require('../controllers/user');
const { getUsers } = require('../controllers/user');

router.post('/signUp', createUser);
router.post('/signIn', login);
router.put('/updateUser', updateUser);
router.post('/logOut', logOut);
router.get('/getUser', getUser);
router.get('/getUsers', getUsers);

module.exports = router;