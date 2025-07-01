import { useEffect } from "react";
import { useTimerStore } from "../store/timerStore";

const Timer = () => {
  const {
    minutes,
    seconds,
    isRunning,
    completedWorkSessions,
    currentSessionType,
    logSession,
    setMinutes,
    setSeconds,
    pauseTimer,
    switchSession,
    incrementSessionCount,

  } = useTimerStore();

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer finished
          pauseTimer(); // stop the timer
          // TODO: Play a sound or switch to next session
          incrementSessionCount();
          logSession(currentSessionType);
          switchSession();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, completedWorkSessions]);

  return (
    <div className="text-center text-5xl font-bold mb-4">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
};

export default Timer;
