import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import FacebookLogin from 'react-facebook-login';

const soccerImage = "https://koditips.com/wp-content/uploads/european-football-soccer-kodi.png";

const Home = (props) => (
    <div className="App bg">
      <header className="App-header">
      <Link to="/categories">
        <div className="enter-site">
          <img src={soccerImage} alt="soccer-ball" />
          <span>ENTER SITE</span>
        </div>
        </Link>
        <h1>
          Goal of the Month
        </h1>
          <h3>
          Pick your goal of the month and upload your own videos!<br />
          Goals from the EPL, Champions League, La Liga and more...
          </h3>
      </header>
  

    </div>
  );

export default Home;


    /* {props.userId
      ? (
        <div>
          <button onClick={props.onLogout}>Log out</button>
        </div>
      ) : (
      <FacebookLogin
            appId={2279032468855290}
            autoLoad
            callback={props.onLogin}
          >
      Sign in with Facebook
          </FacebookLogin>
      )} */