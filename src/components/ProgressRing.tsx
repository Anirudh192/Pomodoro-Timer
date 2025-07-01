import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTimerStore } from '../store/timerStore';

const ProgressRing = () => {
  const { minutes, seconds, currentSessionType } = useTimerStore();
  
  const total =
    currentSessionType === 'work'
      ? 25 * 60
      : currentSessionType === 'shortBreak'
      ? 5 * 60
      : 15 * 60;

  const remaining = minutes * 60 + seconds;
  const percentage = 100 - (remaining / total) * 100;

  return (
    <div className="w-48 h-48 mx-auto">
      <CircularProgressbar
        value={percentage}
        text={`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#22d3ee',
          trailColor: '#1f2937',
        })}
      />
    </div>
  );
};

export default ProgressRing;
