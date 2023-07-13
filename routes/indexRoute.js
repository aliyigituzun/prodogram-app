const express = require('express');
const router = express.Router();

const indexGetController = require('../controllers/index/index/get');
const dietGetController = require('../controllers/index/diet/get');
const exerciseGetController = require('../controllers/index/exercise/get');
const faqGetController = require('../controllers/index/faq/get');
const calculatorGetController = require('../controllers/index/calculator/get');
const programGetController = require('../controllers/index/program/get');
const projectGetController = require('../controllers/index/project/get');


router.get('/', 
    indexGetController
    );
router.get('/diet', 
    dietGetController
    );
router.get('/exercise', 
    exerciseGetController
    );
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

module.exports = router;


