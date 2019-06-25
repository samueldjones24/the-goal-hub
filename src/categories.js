import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
    <div className="grid-container">
        <Link to="/categories/premier-league" className="grid-item">Premier League</Link>
        <div className="grid-item">Champions League</div>
        <div className="grid-item">EFL</div>
        <div className="grid-item">FA Cup</div>
        <div className="grid-item">Euros</div>
        <div className="grid-item">World Cup</div>
        <div className="grid-item">WSL</div>
        <div className="grid-item">Amateur</div>
    </div>
);



export default Categories;