import React, { useState, useEffect } from 'react';

const Year = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year every year
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24); // Update every 24 hours

    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  return <span>{currentYear}</span>;
};

export default Year;
