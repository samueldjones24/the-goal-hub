import React, { Fragment } from 'react';
import GoalCard from './goalCard';
import data from './data/data.json';
import './goalsContainer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight);

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
    return (
      <Fragment>
        <div className="goals">
        <div className="header-wrapper">
          <FontAwesomeIcon icon="arrow-left" className="arrow-icon" />
          <span className="month">JUNE</span>
          <FontAwesomeIcon icon="arrow-right" className="arrow-icon" />
        </div>
          {this.state.goals.sort((a, b) => (b.statistics.likeCount) - (a.statistics.likeCount)).map(goal => {
            return (
              <GoalCard 
              key={goal.id}
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
