import React from 'react';

import Lucifer from '../../../images/lucifer.png';
import Rakesh from '../../../images/rakesh.png';
import Nikhil from '../../../images/nikhil.png';
import Zishan from '../../../images/zishan.png';
import './Team.scss';

const Team = () => {
  return (
    <div className="team">
      <div className="team__header">
        <p className="team__header--title">Valuable Team</p>
        <h2 className="team__title">Our Active Team</h2>
        <p className="team__subtitle">
          We came together to compete and win in a competition but
          <br /> I have a feeling that’s this gonna be so much more than
          <br /> that.
        </p>
      </div>
      <div className="team__content">
        <div className="team__member">
          <div className="team__member__image">
            <img src={Lucifer} alt="lucifer" />
          </div>
          <div className="team__member__info">
            <h3 className="team__member__name">Lucifer</h3>
            <p className="team__member__tag">@lucifer</p>
          </div>
        </div>
        <div className="team__member">
          <div className="team__member__image">
            <img src={Rakesh} alt="rakesh" />
          </div>
          <div className="team__member__info">
            <h3 className="team__member__name">Rakesh</h3>
            <p className="team__member__tag">@rakesh</p>
          </div>
        </div>
        <div className="team__member">
          <div className="team__member__image">
            <img src={Nikhil} alt="nikhil" />
          </div>
          <div className="team__member__info">
            <h3 className="team__member__name">Nikhil Yadav</h3>
            <p className="team__member__tag">@nikhil</p>
          </div>
        </div>
        <div className="team__member">
          <div className="team__member__image">
            <img src={Zishan} alt="zishan" />
          </div>
          <div className="team__member__info">
            <h3 className="team__member__name">Zishan</h3>
            <p className="team__member__tag">@zishan-7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
