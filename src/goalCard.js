import React from 'react';
import './goalCard.css';

const GoalCard = ({
  title,
}) => {
  return (
    <div className="goal-card">
      <h1 className="title">`{title}`</h1>
      {/* <div className="inner-wrap">
        <div className="card-header-wrap">
          <div className="card-header">
            <FontAwesomeIcon icon="sign" className="logo-icon" />
          </div>
        </div>
        <div>
          <span className="date">{date}</span>
        </div>
        <div>
          <a href={link}> 
          <FontAwesomeIcon icon="video" className="link"/>
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon="thumbs-up" />
          <span className="likes">{likes}</span>
        </div>
      </div> */}
    </div>
  );
};

export default GoalCard;
