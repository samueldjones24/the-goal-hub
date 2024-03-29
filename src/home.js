import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';


const soccerImage = "https://koditips.com/wp-content/uploads/european-football-soccer-kodi.png";

const Home = () => (
    <div className="App bg">
      <header className="App-header">
      <Link to="/categories">
        <div className="enter-site">
          <img src={soccerImage} alt="soccer-ball" />
          <span>The Goal Hub</span>
        </div>
        </Link>
          <h1>
            <br />
         Only the best goals will do.<br />
         Watch them all here.<br />
          </h1>
      </header>
      

    </div>
  );

export default Home;
