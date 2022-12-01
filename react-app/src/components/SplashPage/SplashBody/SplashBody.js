
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
// import LogoutButton from '../../auth/LogoutButton';
import './SplashBody.css';
import ZillowHome from '../../../assets/zillow-front-2.jpeg'

const SplashBody = () => {
  const user = useSelector(state => state.session.user);

  return (
    <div className="splash-body">
      <div className="search-container">
        <img className="splash-home-front" src={ZillowHome} alt="house"/>
      </div>
      <div className="splash-cards">
        <Link to="/listings">
          <div className="buy-home-card">
            <h4 className="card-header">Buy a home</h4>
            <p className="home-card-desc">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
              <button className="browse-homes-card-btn">Browse homes</button>
          </div>
        </Link>
          <div className="place-sell-card">
            <h4 className="card-header">Sell a home</h4>
            <p className="sell-card-desc">Ready to sell? Take advantage of our network and expertise.</p>
            <button className="sell-card-btn">Sell a home</button>
          </div>
        <Link to="/listings">
          <div className="schedule-tour-card">
            <h4 className="card-header">Tour a home</h4>
            <p className="tour-card-desc">See a home you like? Schedule a tour now with one of our agents. </p>
            <button className="tour-card-btn">Find a home to tour</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SplashBody;