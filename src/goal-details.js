import React from 'react';
import Likes from './likes';

class GoalLikes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         likes: parseInt(props.userLikes, 10),
        isLiked: false,
      };

    }

    handleGoalLike = () => {
        this.setState({
          likes: this.state.likes +1 ,
        });
      };

      render() {
          return (
            <Likes
            likes={this.state.likes}
            goalLike={this.handleGoalLike}
          />
          )
      }
}
    export default GoalLikes;