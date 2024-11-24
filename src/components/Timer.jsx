import { useEffect, useState } from "react";

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime); // Time in seconds

  useEffect(() => {
    // Run the timer if time is greater than 0
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

    // Clear the interval when the timer stops or the component unmounts
    return () => clearInterval(timer);
  }, [time]);

  // Convert time in seconds to MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <h1 className="font-semibold text-[#765adb] text-lg">
        Time Left: {formatTime(time)}
      </h1>
    </div>
  );
};

export default Timer;
