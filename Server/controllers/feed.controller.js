const stream = require('getstream');

require('dotenv').config();
const api_key = process.env.STREAM_API_KEY;
const app_id = process.env.STREAM_APP_ID;

const client = stream.connect(api_key, null, app_id);

const getUserActivities = async (req, res) => {
  const { userId, token, name, avatar } = req.body;
  const user = client.feed('timeline', userId, token);

  try {
    const activities = await user.get({ limit: 5 });
    activities.display_name = name;
    activities.display_avatar = avatar;
    res.status(200).json({ activities });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
const postActivity = async (req, res) => {
  const { activity, userId, token } = req.body;
  const userFeed = client.feed('timeline', userId, token);
  try {
    await userFeed.addActivity(JSON.stringify(activity));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error posting activity' });
  }
  res.status(200).json({ message: 'Activity posted' });
};

module.exports = { getUserActivities, postActivity };
