import { useTimerStore } from "../store/timerStore";

export const TimerDisplay = () => {
  const { minutes, seconds, sessionType } = useTimerStore();
  const padded = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="text-center mb-6">
      <p className="text-lg mb-1 capitalize">{sessionType} Session</p>
      <div className="text-6xl font-mono tracking-widest">
        {padded(minutes)}:{padded(seconds)}
      </div>
    </div>
  );
};
