const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmark');
const { createBookmark } = require('../controllers/bookmark');
const { deleteBookmark } = require('../controllers/bookmark');

router.post('/createBookmark',createBookmark);
router.post('/deleteBookmark',deleteBookmark);

module.exports = router;