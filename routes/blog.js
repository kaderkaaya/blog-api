const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');
const { createBlog } = require('../controllers/blog');
const { updateBlog } = require('../controllers/blog');
const { getBlog } = require('../controllers/blog');
const { getBlogs } = require('../controllers/blog');
const { likesCount } = require('../controllers/blog');
const { viewsCount } = require('../controllers/blog');


router.post('/createBlog',createBlog);
router.post('/updateBlog',updateBlog);
router.get('/getBlog',getBlog);
router.get('/getBlogs',getBlogs);
router.get('/likesCount',likesCount);
router.get('/viewsCount',viewsCount);


module.exports = router;