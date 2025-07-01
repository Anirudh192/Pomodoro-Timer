// src/components/TimerControls.tsx
import { useTimerStore } from "../store/timerStore";

const TimerControls = () => {
  const {
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimerStore();

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {!isRunning ? (
        <button
          className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={startTimer}
        >
          Start
        </button>
      ) : (
        <button
          className="cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          onClick={pauseTimer}
        >
          Pause
        </button>
      )}
      <button
        className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
