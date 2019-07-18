import React from 'react';
import './styles/goalCard.css';
import './videoPlayer.js'
import GoalLikes from './goal-details';

import { FacebookShareButton,
  TwitterShareButton, 
  } from 'react-share';


  import {
    FacebookIcon,
    TwitterIcon,

  } from 'react-share';

// const shareUrl = 

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

<span className="rank">{props.rank}</span>
	      <img className="video" data-video={props.goal.id} alt="PLAY" width="80" height="65" src={props.thumbnail}></img>
        <span className="title">{toTitleCase(props.goal.snippet.title).substring(0,25)}...</span>
	        
          <div className="Buttons">
	      <div className="shareButtons">
<span >
  <FacebookShareButton
  url={`https://www.youtube.com/watch?v=${props.goal.id}`}
  quote='Checkout this goal I saw on The GoalHub!'
  >
  <FacebookIcon
  size={20}
  round />
  </FacebookShareButton>
</span>
    <span>
    <TwitterShareButton
        url={`https://www.youtube.com/watch?v=${props.goal.id}`}
        title='Checkout this goal I saw on The GoalHub!'
        >
        <TwitterIcon
          size={20}
          round />
      </TwitterShareButton>
    </span>
    <span className="likes-wrapper">
    <GoalLikes
	        userLikes={props.goal.statistics.likeCount}
	        />
    </span>
  </div>
  </div>
  </div>
  );

  

  
export default GoalCard;
