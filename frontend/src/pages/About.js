import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          {/* Add your image here */}
          <div className="image-placeholder"></div>
        </div>
        <div className="about-text">
          <h2>Hello, I'm Aditi</h2>
          <p>
            I am a passionate web developer with expertise in creating responsive and user-friendly websites.
            With a strong foundation in both front-end and back-end technologies, I strive to build
            applications that provide exceptional user experiences.
          </p>
          <p>
            My journey in web development started several years ago, and I've been continuously learning
            and improving my skills ever since. I enjoy tackling complex problems and finding elegant solutions.
          </p>
          <div className="personal-info">
            <p><strong>Name:</strong> Aditi</p>
            <p><strong>Email:</strong> aditi@example.com</p>
            <p><strong>Location:</strong> Your Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;