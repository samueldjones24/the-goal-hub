import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './goalCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import GoalLikes from './goal-details';

library.add(faThumbsUp);


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
      <iframe className="video" title={props.goal.etag} width="80" height="65" src={props.URL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <span className="title">{toTitleCase(props.goal.snippet.title)}</span>
    <div className="likes-wrapper">
       
      
      <GoalLikes
      userLikes={props.goal.statistics.likeCount}
            />
      
    </div>
  </div>
  );

  

  
export default GoalCard;
