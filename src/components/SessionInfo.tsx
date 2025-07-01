import { useTimerStore } from "../store/timerStore";

const SessionInfo = () => {
  const { sessionCount } = useTimerStore();

  return (
    <p className="text-sm text-gray-400">
      Sessions Completed: {sessionCount} / 4
    </p>
  );
};

export default SessionInfo;