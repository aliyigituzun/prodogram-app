const express = require('express');
const router = express.Router();

const isAdmin = require('../middleware/isAdmin')

const adminIndexGetController = require('../controllers/admin/index/get')
const adminAuthGetController = require('../controllers/admin/auth/get')
const adminProject28GetController = require('../controllers/admin/project28/get')
const adminUsersGetController = require('../controllers/admin/users/index/get')
const adminUsersEditGetController = require('../controllers/admin/users/edit/get')
const adminExercisesGetController = require('../controllers/admin/exercises/index/get')
//const adminExercisesEditGetController = require('../controllers/admin/exercises/edit/get')

const adminAuthPostController = require('../controllers/admin/auth/post')
const adminUsersDeletePostController = require('../controllers/admin/users/delete/post');
const adminUsersEditPostController = require('../controllers/admin/users/edit/post');
// const adminExercisesDeletePostController = require('../controllers/admin/exercises/delete/post');
// const adminExercisesEditPostController = require('../controllers/admin/exercises/edit/post');
const adminExercisesCreatePostController = require('../controllers/admin/exercises/create/post');

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
router.get('/exercises',
    //isAdmin,
    adminExercisesGetController
    );
// router.get('/exercises/:id',
//     isAdmin,
//     adminExercisesEditGetController
//     );

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
router.post('/exercises/create',
    //isAdmin,
    adminExercisesCreatePostController
    );
// router.post('/exercises/delete',
//     isAdmin,
//     adminExercisesDeletePostController
//     );
// router.post('/exercises/edit',
//     isAdmin,
//     adminExercisesEditPostController
//     );

module.exports = router;

