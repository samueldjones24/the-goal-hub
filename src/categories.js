import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';
import './App.css';

const imagePL = "https://www.footballticketnet.com/files/images/tournaments/Buy-Premier-League-Football-Tickets-FootballTicketNet.png";
const imageCL = "https://statics.sportskeeda.com/wp-content/uploads/2014/06/uefa-champions-league-2013-1403699681.jpg";
const imageEFL = "https://www.carlisleunited.co.uk/siteassets/image/efl/efllogo.jpg/Large";
const imageFA = "http://d2dzjyo4yc2sta.cloudfront.net/?url=images.pitchero.com%2Fui%2F558160%2F1440016156_0.jpg&bg=fff&w=1200&h=630&t=frame";
const imageEuros = "https://cdn.mos.cms.futurecdn.net/21552bc46f6ffa835499ed671dd8ad2d.jpg";
const imageWC = "https://adobe99u.files.wordpress.com/2018/06/wc-logo-composite.jpg?quality=100&resize=1240%2C920&strip";
const imageWSL = "http://www.ciderspace.co.uk/photos/misc/fawsl-logo.jpg";
const imageAms = "https://koditips.com/wp-content/uploads/european-football-soccer-kodi.png";

const Categories = () => (
    <div className="App bg">
      <header className="App-header">
        <div className="container">
        <Link to="/categories/premier-league"><img src={imagePL} alt="Premier League" /></Link>
        <Link to="/categories/champions-league"><img src={imageCL} alt="Champions League" /></Link>
        <Link to="/categories/english-football-league"><img src={imageEFL} alt="EFL" /></Link>
        <Link to="/categories/fa-cup"><img src={imageFA} alt="FA Cup" /></Link>
        <Link to="/categories/euro-championships"><img src={imageEuros} alt="Euros" /></Link>
        <Link to="/categories/world-cup"><img src={imageWC} alt="World Cup" /></Link>
        <Link to="/categories/wsl"><img src={imageWSL} alt="Women's Super League" /></Link>
        <div className="amateur-container">
        <Link to="/categories/amateur"><img src={imageAms} alt="Amateur Football" /></Link>
        <div className="amateur-text">AMATEUR</div>
        </div>
        </div>
      </header>
    </div>
);



export default Categories;