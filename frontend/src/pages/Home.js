import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <h2>I'm Aditi</h2>
        <p>Web Developer & Designer</p>
        <button className="cta-button">View My Work</button>
      </div>
    </div>
  );
}

export default Home;