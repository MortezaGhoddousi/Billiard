import React, { useState, useEffect } from "react";
import '../css/Timer.css';

const Timer = ({ price }) => {
  const [isActive, setIsActive] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0); 
  const [Cost, setCost] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [time, setTime] = useState({
    hour: Math.floor(timeSpent / 3600),
    minutes: Math.floor((timeSpent % 3600) / 60),
    seconds: timeSpent % 60,
  });
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1); 
        setTotalTime((prevTotal) => prevTotal + 1);
        setTime({
          hour: Math.floor((timeSpent + 1) / 3600), 
          minutes: Math.floor(((timeSpent + 1) % 3600) / 60),
          seconds: (timeSpent + 1) % 60,
        });
      }, 1000);
    } else if (!isActive && timeSpent !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isActive, timeSpent]);

  const handleStartStopClick = () => {
    if (isActive) {
      const cost = Math.floor(timeSpent * price);
      setCost((prevCost) => prevCost + cost);
    }
    
    setIsActive(!isActive);
    
  };
  
  const handleThis = () => {
    const currentCost = Math.floor(timeSpent * price); 
    setPrices([...prices, currentCost]); 
    setTimeSpent(0); 
    setTime({ hour: 0, minutes: 0, seconds: 0 }); 

    const sum = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,cost );
      setCost(sum);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeSpent(0); 
    setTotalTime(0); 
    setCost(0); 
    setPrices([]); 
    setTime({ hour: 0, minutes: 0, seconds: 0 });
  }

  const cost = Math.floor(timeSpent * price);

  const prs = prices.map(function (el, ind) {
    return <p key={ind}>هزینه : تومان {el}</p>;
  });

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const totalHours = Math.floor(totalTime / 3600);
  const totalMinutes = Math.floor((totalTime % 3600) / 60);
  const totalSeconds = totalTime % 60;

  return (
    <div className="timer">
      <p className="time"> {formatTime(totalSeconds)} : {formatTime(totalMinutes)} : {formatTime(totalHours)}</p>
      {/* <p className="time">
         {formatTime(time.seconds)} : {formatTime(time.minutes)} : {formatTime(time.hour)}
      </p> */}
      <div className="buttons">
        <button onClick={handleStartStopClick}>
          {isActive ? "پایان" : "شروع"}
        </button>
        <button onClick={handleThis}>باز و بسته</button>
        <button onClick={handleReset}>ریست</button>
      </div>
      <p>هزینه جاری : {cost} تومان</p>
      {prs}
      <p>هزینه کل : {Cost} تومان</p>
    </div>
  );
};

export default Timer;
