import React, { useCallback, useEffect, useState } from 'react';
import { Avatar } from 'stream-chat-react';
import {
  Activity,
  LikeButton,
  CommentField,
  CommentList
} from 'react-activity-feed';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './PostCard.scss';

const cookies = new Cookies();
const userId = cookies.get('userId');
const token = cookies.get('token');
const name = cookies.get('name');
const avatar = cookies.get('avatarUrl');

const PostCard = (props) => {
  const [loadedActivities, setLoadedActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/feed/getActivities`,
        {
          userId,
          token,
          name,
          avatar
        }
      );
      setLoadedActivities(response.data.activities);
      setLoading(false);
      // console.log('me too called once');
    } catch (error) {}
  }, [setLoading]);

  useEffect(() => {
    setLoading(true);
    fetchData();
    // console.log('i called once');
  }, [fetchData]);

  // console.log(loadedActivities);
  // const activities = loadedActivities.results;
  return (
    <>
      {loadedActivities.results ? (
        <>
          {loadedActivities.results.map((activity) => (
            <div className="post-card">
              <Activity
                {...props}
                key={activity.id}
                activity={activity}
                userId={''}
                Header={() => (
                  <div className="post-card__header">
                    <div className="post-card__header__avatar">
                      <Avatar
                        image={loadedActivities.display_avatar}
                        size={52}
                        name={loadedActivities.display_name}
                      />
                    </div>
                    <h3>{loadedActivities.display_name}</h3>
                  </div>
                )}
                Footer={({ activity, userId }) => (
                  <>
                    <div className="post-card__footer__like">
                      <LikeButton activity={activity} />
                    </div>
                    <CommentField activity={activity} />
                    <CommentList activityId={activity.id} />
                  </>
                )}
              />
            </div>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PostCard;
