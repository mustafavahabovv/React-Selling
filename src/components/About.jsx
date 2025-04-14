import React from 'react';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-image">
          <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="about" />
          <div className="experience">
            <span>Trusted Merchant</span>
            <span>for 50 years</span>
          </div>
        </div>
        <div className="about-info">
          <h3>Merchant Company</h3>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default About;