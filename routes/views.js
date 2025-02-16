const express = require('express');
const router = express.Router();
const viewController = require('../controllers/view');
const { createView } = require('../controllers/view');
const { deleteView } = require('../controllers/view');

router.post('/createView',createView);
router.post('/deleteView',deleteView);

module.exports = router;