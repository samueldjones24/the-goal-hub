import React, { Fragment } from 'react';
import GoalCard from './goalCard';
// import {channelID, apiKey, playlistIDsURL} from './data/youtubeAPI.js';
// import april from './data/apr.json';
// import march from './data/mar.json';
import './goalsContainer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight);

let thumbnailBaseURL = "https://img.youtube.com/vi/"

const apiKey = `AIzaSyBdi5Q3kByqWn-UYNznAvsZMu_Bs5YGWPs`;
const channelID = `UCXDkshUQ8OFJjz2BKGjt-KQ`;
const playlistIDsURL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=`;
const playlistItemsURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=`
const videoDetailsURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // aprGoals: april.items,
      // marGoals: march.items,
      displayMonth: "April",
      playlistInfo: {},
      marchVideoList: {},
      aprilVideoList: {},
      marchVideoDetails: {},
      marchVideosHere: false,
      aprilVideoDetails: {},
      aprilVideosHere: false,
      // eslint-disable-next-line react/no-unused-state
      isError: false,
    };
  }

  // changeMonthLeft = () => {
  //   if (this.state.displayMonth = "April")  {
  //     this.setState({
  //       displayMonth: "March"
  //     })
  //   } else {
  //     this.setState({
  //       displayMonth: "April"
  //     })
  //   };
  // };

  // changeMonthRight = () => {
  //   if (this.state.displayMonth = "March")  {
  //     this.setState({
  //       displayMonth: "April"
  //     })
  //   } else {
  //     this.setState({
  //       displayMonth: "March"
  //     })
  //   };
  // };

  getData = () => {
    fetch(`${playlistIDsURL}${channelID}&key=${apiKey}`)
      .then((res) => res.json())
      .then(data => {
        this.setState({ playlistInfo: data })
        fetch(`${playlistItemsURL}${data.items[0].id}&key=${apiKey}`)
      .then((res2) => res2.json())
      .then(data2 => {
        this.setState({ marchVideoList: data2 });
        fetch(`${videoDetailsURL}${data2.items[0].snippet.resourceId.videoId}%2C${data2.items[1].snippet.resourceId.videoId}%2C${data2.items[2].snippet.resourceId.videoId}%2C${data2.items[3].snippet.resourceId.videoId}%2C${data2.items[4].snippet.resourceId.videoId}%2C${data2.items[5].snippet.resourceId.videoId}%2C${data2.items[6].snippet.resourceId.videoId}&key=${apiKey}`)
        .then((res3) => res3.json())
        .then(data3 => {
          this.setState({ marchVideoDetails: data3})
          this.setState({ marchVideosHere: true })          
          fetch(`${playlistItemsURL}${data.items[1].id}&key=${apiKey}`)
          .then((res4) => res4.json())
          .then(data4 => {
            this.setState({ aprilVideoList: data4 });
            fetch(`${videoDetailsURL}${data4.items[0].snippet.resourceId.videoId}%2C${data4.items[1].snippet.resourceId.videoId}%2C${data4.items[2].snippet.resourceId.videoId}%2C${data4.items[3].snippet.resourceId.videoId}%2C${data4.items[4].snippet.resourceId.videoId}%2C${data4.items[5].snippet.resourceId.videoId}%2C${data4.items[6].snippet.resourceId.videoId}%2C${data4.items[7].snippet.resourceId.videoId}&key=${apiKey}`)
        .then((res5) => res5.json())
        .then(data5 => {
          this.setState({ aprilVideoDetails: data5})
          this.setState({ aprilVideosHere: true })
            })
          })
        })
      })
    })
      .catch(() => {  
        // eslint-disable-next-line react/no-unused-state
        this.setState({ isError: true });
      });
  };

  // getGoals = () => {
  //   fetch('../public/data.json')
  //     .then((res) => res.json())
  //     .then(({ data: goals }) => {
  //       this.setState({ goals });
  //     })
  //     .catch(() => {
  //       // eslint-disable-next-line react/no-unused-state
  //       this.setState({ isError: true });
  //     });
  // };
  
  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.marchVideosHere === false && this.state.aprilVideosHere === false) {
      return <span>LOADING</span>
    } else { 
      let goalsToDisplay = "";
      if (this.state.displayMonth === "April") {
        goalsToDisplay = this.state.aprilVideoDetails.items;
      }
      else {
        goalsToDisplay = this.state.marchVideoDetails.items;
      }
      console.log(this.state)
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
            )
          })};
        </div>
        <span>Hello</span>
      </Fragment>
    );
  }
}
}
export default Goals;
