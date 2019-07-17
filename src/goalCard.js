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



const shareUrl = 'https://www.youtube.com/channel/UCEg25rdRZXg32iwai6N6l0w'



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
      <div className="title">{toTitleCase(props.goal.snippet.title)}</div>
    <div className="likes-wrapper">
      <GoalLikes
      userLikes={props.goal.statistics.likeCount}
      />
    </div>
<span>
  <FacebookShareButton
  url={shareUrl}>
  <FacebookIcon
  size={20}
  round />
  </FacebookShareButton>
</span>
    <span>
    <TwitterShareButton
        url={shareUrl}
        >
        <TwitterIcon
          size={20}
          round />
      </TwitterShareButton>
    </span>
  
  

      <span className="rank">{props.rank}</span>
      <img className="video" data-video={props.goal.id} alt="PLAY" width="80" height="65" src={props.thumbnail}></img>
      <span className="title">{toTitleCase(props.goal.snippet.title).substring(0,30)}...</span>
      <div className="likes-wrapper">
        <GoalLikes
        userLikes={props.goal.statistics.likeCount}
        />
      </div>

  </div>
  );

  

  
export default GoalCard;
