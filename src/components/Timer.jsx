import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    // Only run the timer if isActive is true
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      // If paused or stopped, clear the interval
      clearInterval(interval);
    }

    // Cleanup: stop the timer if the component is destroyed
    return () => clearInterval(interval);
  }, [isActive]); // This effect re-runs whenever isActive changes

  // Control Functions
  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="text-center  bg-linear-to-br from-black to-green-900 p-10 rounded-lg min-h-screen">
      <h1 className='text-white'>{seconds}s</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {!isActive ? (
          <button onClick={handleStart} style={btnStyle}>Start</button>
        ) : (
          <button onClick={handlePause} style={btnStyle}>Pause</button>
        )}
        <button onClick={handleStop} style={{...btnStyle, backgroundColor: '#ff4d4d'}}>
          Stop / Reset
        </button>
      </div>
    </div>
  );
};

const btnStyle = { padding: '10px 20px', fontSize: '16px', cursor: 'pointer' };

export default Timer;