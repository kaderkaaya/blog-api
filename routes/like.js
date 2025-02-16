const express = require('express');
const router = express.Router();
const likeController = require('../controllers/like');
const { createLike } = require('../controllers/like');
const { deleteLike } = require('../controllers/like');

router.post('/createLike',createLike);
router.post('/deleteLike',deleteLike);

module.exports = router;