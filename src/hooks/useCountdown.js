import {useEffect, useState} from "react";

export default function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
  let {hours, minutes, seconds} = timeLeft;
  // to be refactored
  if (seconds < 10) seconds = `0${seconds}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;

  useEffect(() => {
    const countdown = calcTimeLeft();

    const timer = setInterval(() => {
      setTimeLeft(countdown);
    }, 1000);

    return () => clearInterval(timer);
  });

  return {hours, minutes, seconds};
}

function calcTimeLeft() {
  const day = new Date().getDate() + 1;
  const month = new Date().getMonth() + 1;
  const nextYear = new Date().getFullYear();
  const futureDate = `${month}/${day}/${nextYear}`;

  let difference = Number(new Date(futureDate)) - new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}
