const express = require('express');
const router = express.Router();

const indexGetController = require('../controllers/index/index/get');
// const libraryIndexGetController = require ('../controllers/index/library/index/get');
// const dietGetController = require('../controllers/index/library/diet/get');
// const exerciseGetController = require('../controllers/index/library/exercise/get');
const faqGetController = require('../controllers/index/faq/get');
const calculatorGetController = require('../controllers/index/calculator/get');
const programGetController = require('../controllers/index/program/get');
const projectGetController = require('../controllers/index/project/get');
const projectResultGetController = require('../controllers/project/get');

const projectPostController = require('../controllers/index/project/post');



router.get('/', 
    indexGetController
    );
// router.get('/library',
//     libraryIndexGetController
//     );
// router.get('/library/diet', 
//     dietGetController
//     );
// router.get('/library/exercise', 
//     exerciseGetController
//     );
router.get('/faq', 
    faqGetController
    );
router.get('/calculator', 
    calculatorGetController
    );
router.get('/program', 
    programGetController
    );
router.get('/project', 
    projectGetController
    );
//give me a project getter that takes in a id query and returns the project with that id    
router.get('/project/:id',
    projectResultGetController
    );



router.post('/project', 
    projectPostController
    );

module.exports = router;


