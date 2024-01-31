const express = require('express');
const router = express.Router();

const isAdmin = require('../middleware/isAdmin')

const adminIndexGetController = require('../controllers/admin/index/get')
const adminAuthGetController = require('../controllers/admin/auth/get')
const adminProject28GetController = require('../controllers/admin/project28/get')
const adminUsersGetController = require('../controllers/admin/users/index/get')
const adminUsersEditGetController = require('../controllers/admin/users/edit/get')

const adminAuthPostController = require('../controllers/admin/auth/post')
const adminUsersDeletePostController = require('../controllers/admin/users/delete/post');
const adminUsersEditPostController = require('../controllers/admin/users/edit/post');

router.get('/',
    isAdmin,
    adminIndexGetController
    );
router.get('/auth',
    adminAuthGetController
    );
router.get('/project28',
    isAdmin,
    adminProject28GetController
    );
router.get('/users',
    isAdmin,
    adminUsersGetController
    );
router.get('/users/:id',
    isAdmin,
    adminUsersEditGetController
    );

router.post('/auth',
    adminAuthPostController
    );
router.post('/users/delete',
    isAdmin,
    adminUsersDeletePostController
    );
router.post('/users/edit',
    isAdmin,
    adminUsersEditPostController
    );

module.exports = router;

