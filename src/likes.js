import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp);

const Likes = (props) => {
  return (
      <div>
      <FontAwesomeIcon
        icon="thumbs-up"
        className="thumbs-up-icon"
        onClick={props.goalLike}
      />
      {props.likes}

   </div>
  );
};

export default Likes;