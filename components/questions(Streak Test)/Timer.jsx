import { useState, useEffect } from "react";

const Timer = ({ time }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    if (time) setTimer(time);
  }, [time]);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return formatTime(timer);
};
export default Timer;
