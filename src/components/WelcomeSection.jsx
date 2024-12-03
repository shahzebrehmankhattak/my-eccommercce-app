import React from 'react';
// import './WelcomeSection.css';
import artImage from '../assets/Art.png'
import pager from '../assets/pager.png'

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-content">
        <img src={artImage} alt="Welcome" className="welcome-image" />
        <h2 className='welcome-h2'>Welcome to our shop</h2>
        <p className='welcome-p'>Purchase imported shoes</p>
        <img src={pager} alt='pager'  className='pager' />
      </div>
    </div>
  );
};

export default WelcomeSection;
