import React, { Fragment } from 'react';
import GoalCard from './goalCard';
import april from './data/apr.json';
import march from './data/mar.json';
import './goalsContainer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight);

let thumbnailBaseURL = "https://img.youtube.com/vi/"

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aprGoals: april.items,
      marGoals: march.items,
      displayMonth: "April",
      // eslint-disable-next-line react/no-unused-state
      isError: false,
    };
  }

  changeMonthLeft = () => {
    if (this.state.displayMonth = "April")  {
      this.setState({
        displayMonth: "March"
      })
    } else {
      this.setState({
        displayMonth: "April"
      })
    };
  };

  changeMonthRight = () => {
    if (this.state.displayMonth = "March")  {
      this.setState({
        displayMonth: "April"
      })
    } else {
      this.setState({
        displayMonth: "March"
      })
    };
  };


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
    let goalsToDisplay = "";
    if (this.state.displayMonth === "April") {
      goalsToDisplay = this.state.aprGoals;
    }
    else {
      goalsToDisplay = this.state.marGoals;
    }
    return (
      <Fragment>
        <div className="goals">
        <div className="header-wrapper">
          <FontAwesomeIcon icon="arrow-left" className="arrow-icon" onClick={this.changeMonthLeft}/>
          <span className="month">{this.state.displayMonth}</span>
          <FontAwesomeIcon icon="arrow-right" className="arrow-icon" onClick={this.changeMonthRight}/>
        </div>
          {goalsToDisplay.sort((a, b) => (b.statistics.likeCount) - (a.statistics.likeCount)).map((goal, index) => {
            return (
              <GoalCard 
              key={goal.id}
              goal={goal}
              rank={index+1}
              thumbnail={`${thumbnailBaseURL}${goal.id}/0.jpg`}
              />  
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Goals;
