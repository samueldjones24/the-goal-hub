import React from 'react';
import './styles/goalCard.css';
import './videoPlayer.js'

import GoalLikes from './goal-details';

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

const GoalCard = (props) => (
  <div className="goal-card">
    <div className="rank">{props.rank}</div>
      <img className="video" data-video={props.goal.id} alt="PLAY" width="80" height="65" src={props.thumbnail}></img>
      <span className="title">{toTitleCase(props.goal.snippet.title)}</span>
    <div className="likes-wrapper">
      <GoalLikes
      userLikes={props.goal.statistics.likeCount}
      />
    </div>
  </div>
  );

  

  
export default GoalCard;
