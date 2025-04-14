import React, { useState } from 'react';

const Notification = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter an email!');
      return;
    }
    alert('Subscribed!');
    setEmail('');
  };

  return (
    <div className="notification">
      <div className="container">
        <h2>Get notified on each updates.</h2>
        <div className="form">
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Subscribe</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Notification;