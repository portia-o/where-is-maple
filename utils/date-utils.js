import React from "react";

function getTimeRemaining(endTime) {
  const endTimeValue = endTime.valueOf();
  const now = new Date().valueOf();

  function checkDate() {
    if (endTimeValue > now) {
      const totalSeconds = Math.floor((endTimeValue - now) / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      return [totalSeconds, totalMinutes, totalHours, totalDays];
    } else {
      return [0, 0, 0, 0];
    }
  }

  const [totalSeconds, totalMinutes, totalHours, totalDays] = checkDate();
  const hours = totalHours - totalDays * 24;
  const minutes = totalMinutes - totalDays * 24 * 60 - hours * 60;
  const seconds =
    totalSeconds - totalDays * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  return {
    hours,
    minutes,
    seconds,
    days: totalDays,
  };
}

export function useCountdown(endTime) {
  const [{ days, hours, minutes, seconds }, setTimeRemaining] = React.useState(
    getTimeRemaining(endTime)
  );

  React.useEffect(() => {
    // Every second, recalculate the remaining time,
    // and update state to re-render the component with the new time.
    const interval = setInterval(
      () => setTimeRemaining(getTimeRemaining(endTime)),
      1000
    );

    // If the component unmounts (it won't happen in this app, because it's the root and only component),
    // we need to clean up after ourselves.
    return () => {
      clearInterval(interval);
    };
  }, [endTime]);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
