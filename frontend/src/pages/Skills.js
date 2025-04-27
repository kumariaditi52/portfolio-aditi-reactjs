import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-content">
        <div className="skill-category">
          <h2>Frontend Development</h2>
          <div className="skill-items">
            <div className="skill-item">
              <h3>HTML</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
              <span>90%</span>
            </div>
            <div className="skill-item">
              <h3>CSS</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '85%' }}></div>
              </div>
              <span>85%</span>
            </div>
            <div className="skill-item">
              <h3>JavaScript</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
              <span>80%</span>
            </div>
            <div className="skill-item">
              <h3>React</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '75%' }}></div>
              </div>
              <span>75%</span>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <h2>Backend Development</h2>
          <div className="skill-items">
            <div className="skill-item">
              <h3>Node.js</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '70%' }}></div>
              </div>
              <span>70%</span>
            </div>
            <div className="skill-item">
              <h3>Express</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '65%' }}></div>
              </div>
              <span>65%</span>
            </div>
            <div className="skill-item">
              <h3>MongoDB</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '60%' }}></div>
              </div>
              <span>60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;