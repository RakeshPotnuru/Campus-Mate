const express = require('express');

const {
  getUserActivities,
  postActivity
} = require('../controllers/feed.controller');
const router = express.Router();

router.post('/getActivities', getUserActivities);
router.post('/postActivity', postActivity);

module.exports = router;
