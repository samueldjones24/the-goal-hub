import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => (
    <div className="App">
      <header className="App-header">
      <Link to="/categories"><img src="https://koditips.com/wp-content/uploads/european-football-soccer-kodi.png" alt="soccer ball" style={{borderRadius: "50%"}} /></Link>
        <h1>
          Goal of the Month
        </h1>
          Pick your goal of the month and upload your own videos!<br />
          Goals from the EPL, Champions League, La Liga and more...
      </header>
    </div>
  );

export default Home;
