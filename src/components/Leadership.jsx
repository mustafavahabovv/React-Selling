import React from 'react';
import { team } from '../data/data';

const Leadership = () => {
  return (
    <div className="leadership">
      <div className="container">
        <h2>Leadership</h2>
        <div className="team-list">
          {team.map((member) => (
            <div className="team-item" key={member.id}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p>{member.description}</p>
              <div className="social">
                <a href="#">
                  <span className="social-icon">f</span>
                </a>
                <a href="#">
                  <span className="social-icon">t</span>
                </a>
                <a href="#">
                  <span className="social-icon">in</span>
                </a>
                <a href="#">
                  <span className="social-icon">i</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;