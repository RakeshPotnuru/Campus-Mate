import React from 'react';
import FeatureCard from '../../../common/components/UIElements/FeatureCard';

import MembersIcon from '../../../images/membersIcon.png';
import GroupsIcon from '../../../images/groupsIcon.png';
import ChatIcon from '../../../images/chatIcon.png';
import collaborationIcon from '../../../images/collaborationIcon.png';
import challengesIcon from '../../../images/challengesIcon.png';
import FeedIcon from '../../../images/feedIcon.png';
import './Features.scss';

const Features = () => {
  return (
    <div className="features">
      <div className="features__container">
        <div className="features__details">
          <p className="features__details__text">Our Community</p>
          <h1 className="features__details__title">Community Main Features</h1>
          <p className="features__details__description">
            We got everything you need to keep you connected
            <br /> with the rest of the world.
          </p>
        </div>
        <div className="features__cards">
          <div className="features__item">
            <FeatureCard
              icon={MembersIcon}
              title="Members, Friends"
              description="Members, Friends Connection ( like followers ), Private Message"
            />
          </div>
          <div className="features__item">
            <FeatureCard
              icon={GroupsIcon}
              title="Groups"
              description="Your users can create groups to let other users to join and talk."
            />
          </div>
          <div className="features__item">
            <FeatureCard
              icon={ChatIcon}
              title="Chat"
              description="Forum is ready by BBPress. Your users can make topics and talk."
            />
          </div>
          <div className="features__item">
            <FeatureCard
              icon={collaborationIcon}
              title="Collaboration (Coming Soon)"
              description="We are working on ways to make collaboration effective."
            />
          </div>
          <div className="features__item">
            <FeatureCard
              icon={challengesIcon}
              title="Challenges"
              description="Members get to participate in challenges and win exciting prizes."
            />
          </div>
          <div className="features__item">
            <FeatureCard
              icon={FeedIcon}
              title="Feed"
              description="Share your thoughts with the rest of the world."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
