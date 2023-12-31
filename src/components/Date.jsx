import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that effect runs only once after initial render

  return (
    <DateTime>
    <div className="current-date">
      <p>{currentDate.toLocaleString()}</p>
    </div>
    </DateTime>
  );
};
const DateTime = styled.div`
margin-right :auto;
margin-left : 1850px;
color: white;
font-size: 20px;
font-family: 'Roboto', sans-serif;
`;
export default CurrentDate;
