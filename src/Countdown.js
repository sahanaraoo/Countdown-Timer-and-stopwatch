import { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);

  const formatNumber = (num) => (num < 10 ? "0" + num : num);

  return `${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
};

export default function CountDown() {
  
  const eventDate = new Date("2023-11-18T09:00:00").getTime();

  const calculateRemainingTime = () => {
    const now = new Date().getTime();
    const timeDifference = eventDate - now;

    return Math.floor(timeDifference / 1000); 
  };

  const [countdown, setCountdown] = useState(calculateRemainingTime());
  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerId.current);
    setCountdown(calculateRemainingTime());
  };

  useEffect(() => {
    startTimer();

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      alert("Event has started!");
    }
  }, [countdown]);

  return (
    <div>
        <h3>Countdown Timer</h3>
      <h2>{formatTime(countdown)}</h2>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
