import React, { useState, useEffect } from 'react';

const Special = () => {
  const targetDate = new Date('April 20, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const time  const timeDifference = targetDate - now;

      if (timeDifference < 0) {
        setTimeLeft({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ weeks, days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="special" id="special">
      <div className="special-overlay"></div>
      <div className="container">
        <div className="col-md-7 text-center mx-auto">
          <h3 className="section-sub-title">Special Promo</h3>
          <h3 className="section-title text-white mb-4">Summer Sale</h3>
          <p className="mb-5 lead">
            Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
          </p>
          <div id="date-countdown" className="mb-5">
            <span className="countdown-block">
              <span className="label">{timeLeft.weeks.toString().padStart(2, '0')}</span> weeks
            </span>
            <span className="countdown-block">
              <span className="label">{timeLeft.days.toString().padStart(2, '0')}</span> days
            </span>
            <span className="countdown-block">
              <span className="label">{timeLeft.hours.toString().padStart(2, '0')}</span> hr
            </span>
            <span className="countdown-block">
              <span className="label">{timeLeft.minutes.toString().padStart(2, '0')}</span> min
            </span>
            <span className="countdown-block">
              <span className="label">{timeLeft.seconds.toString().padStart(2, '0')}</span> sec
            </span>
          </div>
          <p>
            <a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">
              Shop Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Special;