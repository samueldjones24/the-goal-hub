import React, { Fragment } from 'react';
import GoalCard from './goalCard';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      // eslint-disable-next-line react/no-unused-state
      isError: false,
      // saveError: false,
    };
  }

  getGoals = () => {
    fetch('../public/data.json')
      .then((res) => res.json())
      .then(({ data: goals }) => {
        this.setState({ goals });
      })
      .catch(() => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ isError: true });
      });
  };

  componentDidMount() {
    this.getGoals();
  }

  render() {
    return (
      <Fragment>
        <div className="goals">
          {this.state.goals.map(goal => {
            return (
              <GoalCard
                key={goal.id}
                {...goal}
              />  
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Goals;
