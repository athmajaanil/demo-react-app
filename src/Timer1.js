

import React, { useState, useEffect } from "react";

const Timer1 = () => {
  const [seconds, setSeconds] = useState(0); // State to track seconds

  useEffect(() => {
    // Function to increment the timer
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1); // Update state
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer</h1>
      <h2>{seconds} seconds</h2>
    </div>
  );
};


export default Timer1;