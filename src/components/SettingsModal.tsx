// src/components/SettingsModal.tsx
import { useState } from "react";
import { useTimerStore } from "../store/timerStore";

const SettingsModal = () => {
  const {
    showSettings,
    toggleSettings,
    setDurations,
    resetTimer,
    workDuration,
    shortBreakDuration,
    longBreakDuration,
    autoStartNextSession,
    toggleAutoStart,
  } = useTimerStore();

  const [work, setWork] = useState(workDuration);
  const [shortBreak, setShortBreak] = useState(shortBreakDuration);
  const [longBreak, setLongBreak] = useState(longBreakDuration);

  if (!showSettings) return null;

  const saveSettings = () => {
    setDurations(work, shortBreak, longBreak);
    resetTimer()
    toggleSettings();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="autoStart"
            checked={autoStartNextSession}
            onChange={toggleAutoStart}
            className="mr-2"
          />
          <label htmlFor="autoStart" className="text-sm text-gray-700">
            Auto-start next session
          </label>
        </div>

        <label className="block mb-2">Work Duration (minutes)</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border rounded"
          value={work}
          onChange={(e) => setWork(Number(e.target.value))}
        />

        <label className="block mb-2">Short Break Duration (minutes)</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border rounded"
          value={shortBreak}
          onChange={(e) => setShortBreak(Number(e.target.value))}
        />

        <label className="block mb-2">Long Break Duration (minutes)</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border rounded"
          value={longBreak}
          onChange={(e) => setLongBreak(Number(e.target.value))}
        />

        <div className="flex justify-end gap-4">
          <button
            className="cursor-pointer bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            onClick={toggleSettings}
          >
            Cancel
          </button>
          <button
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={saveSettings}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
