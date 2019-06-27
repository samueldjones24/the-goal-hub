import React, { Fragment } from 'react';
import GoalCard from './goalCard';
import data from './data/data.json';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: data.items,
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
    console.log(this.state)
    return (
      <Fragment>
        <div className="goals">
          {this.state.goals.map(goal => {
            return (
              <GoalCard
              goal={goal}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Goals;
