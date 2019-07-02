import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './goalCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp);

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

// let baseURL = props => (props.goal.id.map(x => {
//     return `"https://www.youtube.com/watch?v/=${x}"`
//   })
// );

// let baseURL = `https://www.youtube.com/embed/HWwbwT2h0dg`

// let getURL = (props) => {
//   return <iframe title={(props.goal.etag)} width="260" height="185" src={`https://www.youtube.com/embed/${(props.goal.id)}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
// }

// EXAMPLE URL "https://www.youtube.com/embed/HWwbwT2h0dg"

const GoalCard = (props) => (
  <div className="goal-card">
    <div className="rank">{props.rank}</div>
      <iframe className="video" title={props.goal.etag} width="80" height="65" src={`https://www.youtube.com/embed/HWwbwT2h0dg`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <span className="title">{toTitleCase(props.goal.snippet.title)}</span>
    <div className="likes-wrapper">
      <FontAwesomeIcon icon="thumbs-up" className="like-icon" />
      <span className="likes">{props.goal.statistics.likeCount}</span>
    </div>
  </div>
  );

export default GoalCard;
