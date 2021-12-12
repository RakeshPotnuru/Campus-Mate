import React from 'react';

import './FeatureCard.scss';

const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">
        <img src={props.icon} alt={props.title} />
      </div>
      <div className="feature-card__content">
        <h4 className="feature-card__title">{props.title}</h4>
        <p className="feature-card__description">{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
