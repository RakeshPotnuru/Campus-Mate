const Model = require('../models');
const stream = require('getstream');

require('dotenv').config();
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const client = stream.connect(api_key, api_secret, app_id);

const getProfile = async (req, res) => {
  try {
    let doc = await Model.User.findOne({ _id: req.user._id });
    delete doc.password;
    return res.status(200).json(doc);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const addProfile = async (req, res) => {
  const { name, avatarUrl, username } = req.body;
  try {
    await client.user(username).getOrCreate({
      name: name,
      profileImage: avatarUrl
    });
    res.status(200).json({ message: 'Profile added' });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { getProfile, addProfile };
