import { useTimerStore } from '../store/timerStore';

export const SessionHistory = () => {
  const { sessionHistory } = useTimerStore();

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Session History</h2>
      <ul className="text-sm text-gray-300 space-y-1">
        {sessionHistory.map((entry, index) => (
          <li key={index} className="border-b border-gray-600 pb-1">
            {entry.type.toUpperCase()} -{" "}
            {new Date(entry.completedAt).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
};
