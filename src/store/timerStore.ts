import { create } from "zustand";

type SessionType = "work" | "shortBreak" | "longBreak";

interface SessionLogEntry {
  type: SessionType;
  completedAt: string; // ISO string
}

interface TimerState {
  sessionHistory: SessionLogEntry[],
  minutes: number;
  seconds: number;
  isRunning: boolean;
  sessionType: SessionType;
  workSessionsCompleted: number;
  showSettings: boolean;
  sessionCount: number;
  currentSessionType: SessionType;
  completedWorkSessions: number;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  autoStartNextSession: boolean; // Change from Boolean to boolean

  setSessionType: (type: SessionType) => void;
  incrementWorkSessions: () => void;
  incrementSessionCount: () => void; // Add this missing function
  switchSession: () => void;
  toggleSettings: () => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  setMinutes: (val: number) => void;
  setSeconds: (val: number) => void;
  setDurations: (work: number, shortBreak: number, longBreak: number) => void;
  toggleAutoStart: () => void;
  logSession: (type: SessionType) => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  minutes: 15,
  seconds: 0,
  isRunning: false,
  sessionType: "work",
  workSessionsCompleted: 0,
  showSettings: false,
  sessionCount: 0,
  currentSessionType: "work", // Add missing initial value
  completedWorkSessions: 0, // Add missing initial value
  workDuration: 15,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  autoStartNextSession: false,
  sessionHistory: [],
  logSession: (type: SessionType) =>
    set((state) => ({
      sessionHistory: [
        ...state.sessionHistory,
        { type, completedAt: new Date().toISOString() },
      ],
    })),


  toggleAutoStart: () =>
    set((state) => ({ autoStartNextSession: !state.autoStartNextSession })),

  toggleSettings: () => set((state) => ({ showSettings: !state.showSettings })),

  startTimer: () => set({ isRunning: true }),

  pauseTimer: () => set({ isRunning: false }),

  resetTimer: () =>
    set((state) => ({
      minutes:
        state.currentSessionType === "work"
          ? state.workDuration
          : state.currentSessionType === "shortBreak"
          ? state.shortBreakDuration
          : state.longBreakDuration,
      seconds: 0,
      isRunning: false,
    })),

  setMinutes: (val: number) => set({ minutes: val }),
  setSeconds: (val: number) => set({ seconds: val }),
  setSessionType: (type) => set({ currentSessionType: type }),

  incrementWorkSessions: () =>
    set((state) => ({
      completedWorkSessions: state.completedWorkSessions + 1,
    })),

  incrementSessionCount: () =>
    set((state) => ({ sessionCount: state.sessionCount + 1 })),

  switchSession: () => set((state) => {
    let nextType: SessionType;
    let nextMinutes: number;

    if (state.currentSessionType === "work") {
      const nextWorkCount = state.completedWorkSessions + 1;
      nextType = nextWorkCount % 4 === 0 ? "longBreak" : "shortBreak";
      nextMinutes = nextType === "longBreak"
        ? state.longBreakDuration
        : state.shortBreakDuration;

      return {
        completedWorkSessions: nextWorkCount,
        currentSessionType: nextType,
        minutes: nextMinutes,
        seconds: 0,
        isRunning: state.autoStartNextSession,
      };
    } else {
      nextType = "work";
      nextMinutes = state.workDuration;

      return {
        currentSessionType: nextType,
        minutes: nextMinutes,
        seconds: 0,
        isRunning: state.autoStartNextSession,
      };
    }
  }),


  setDurations: (work, shortBreak, longBreak) =>
    set(() => ({
      workDuration: work,
      shortBreakDuration: shortBreak,
      longBreakDuration: longBreak,
    })),
}));
