const express = require('express');
const router = express.Router();

const authRegisterGetController = require('../controllers/auth/register/get')
const authLoginGetController = require('../controllers/auth/login/get')

const authRegisterPostController = require('../controllers/auth/register/post')
// const authLoginPostController = require('../controllers/auth/login/post')
const authLogoutPostController = require('../controllers/auth/logout/post')

router.get('/register',
    authRegisterGetController
    );
router.get('/login',
    authLoginGetController
    );

router.post('/register',
    authRegisterPostController
    );
// router.post('/login',
//     authLoginPostController
//     );

module.exports = router;

