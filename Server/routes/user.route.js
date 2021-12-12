const express = require('express');

const {
  getProfile,
  addProfile,
  getUser
} = require('../controllers/user.controller');
const { authenticate: Auth } = require('../common');

const router = express.Router();

router.get('/getProfile', Auth.verify('user'), getProfile);
router.post('/addProfile', addProfile);

module.exports = router;
