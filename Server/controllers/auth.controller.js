const { connect } = require('getstream');
const bcrypt = require('bcryptjs');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');
const { authenticate: Auth } = require('../common');

const Model = require('../models');

require('dotenv').config();
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
    const { name, email, username, phoneNumber, password } = req.body;

    const userId = crypto.randomBytes(16).toString('hex');

    const serverClient = connect(api_key, api_secret);

    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    const token = serverClient.createUserToken(userId);
    // req.body.authToken = token;
    req.body.userId = userId;

    let doc = await Model.User.create(req.body);
    doc.save();
    res.status(200).json({
      token,
      userId,
      name,
      email,
      username,
      phoneNumber,
      hashedPassword
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = null;

    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);

    const { users } = await client.queryUsers({ email: email });
    if (!users.length) {
      res.status(404).json({ message: 'User not found' });
    }

    if (req.body.email) {
      user = await Model.User.findOne({
        email: req.body.email
      });
    }

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    await user.authenticate(req.body.password);

    user.authToken = await Auth.getToken({
      _id: user._id
    });

    await user.save();

    const success = await bcrypt.compare(password, users[0].hashedPassword);
    const token = await serverClient.createUserToken(users[0].id);

    // return res.status(200).json(user);

    if (success) {
      res
        .status(200)
        .json({ token, userId: users[0].id, email, name: users[0].name });
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// const getProfile = async (req, res) => {
//   try {
//     console.log(req);
//     let doc = await Model.User.findOne({ _id: req.user._id });
//     delete doc.password;
//     return res.status(200).json(doc);
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };

module.exports = { signup, login };
