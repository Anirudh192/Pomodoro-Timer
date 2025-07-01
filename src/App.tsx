import './index.css'
import { useTimerStore } from "./store/timerStore";
import  Controls  from "./components/Controls";
import SessionInfo from "./components/SessionInfo";
import SettingsModal from "./components/SettingsModal";
import Timer from './components/Timer';
import { SessionHistory } from './components/SessionHistory';

export default function App() {
  const { showSettings, toggleSettings, currentSessionType } = useTimerStore();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">🍅 Pomodoro Timer</h1>

      <p className="text-sm text-gray-500 mb-2">
        Current Session: {currentSessionType}
      </p>

      <SessionHistory/>

      <Timer />

      <Controls />

      <SessionInfo />

      <button
        onClick={() => toggleSettings()}
        className="cursor-pointer mt-6 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 focus:outline-none "
        aria-label="Open Settings"
      >
        ⚙ Settings
      </button>

      {showSettings && <SettingsModal />}
    </div>
  );
}
