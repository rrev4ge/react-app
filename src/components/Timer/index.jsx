import React, { useState, useEffect } from 'react';
import styles from "./Timer.module.css";

const Timer = () => {
  const [timer, setTimer] = useState({
    counter: 0,
    mSeconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });
  const [isActive, setIsActive] = useState(false);

  const { counter, mSeconds, seconds, minutes, hours, days } = timer;

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTimer(() => ({
          ...timer,
          counter: counter + 1,
          mSeconds: counter % 1000,
          seconds: Math.floor((counter / 1000) % 60),
          minutes: Math.floor((counter / 60000) % 60),
          hours: Math.floor((counter / 3600000) % 24),
        }));
      }, 1);
    }
    return () => clearInterval(intervalId);
  }, [timer,isActive,counter, mSeconds, seconds,minutes,hours]);

  const renderValue = (value) => (
      value < 10 ? '0' + value : value
      );

  const resetTimer = () => {
    setIsActive(false);
    setTimer({
      ...timer,
      counter: 0,
      mSeconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    });
  };

  return (
    <div className={styles.container}>
      <div>
        {`${renderValue(hours)} : ${renderValue(minutes)}  : ${renderValue(
          seconds
        )}`}
      </div>
      <div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
      <span> | {mSeconds < 10 ? '00' + mSeconds : (mSeconds < 100 ? '0' + mSeconds : mSeconds)}</span>
      </div>
    </div>
  );
};

export default Timer;
