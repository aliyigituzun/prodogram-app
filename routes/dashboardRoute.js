const express = require('express');
const router = express.Router();

const dashboardProfileGetController = require('../controllers/dashboard/profile/get')


router.get('/profile',
    dashboardProfileGetController
    );

// router.post('/login',
//     authLoginPostController
//     );

module.exports = router;

