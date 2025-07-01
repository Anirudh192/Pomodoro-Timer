# 🍅 Pomodoro Timer

A modern, feature-rich Pomodoro Timer application built with React, TypeScript, and Tailwind CSS. This timer helps you boost productivity using the Pomodoro Technique with customizable sessions, progress tracking, and a clean, intuitive interface.

## ✨ Features

- **Timer Functionality**
  - 25-minute work sessions
  - 5-minute short breaks
  - 15-minute long breaks (after 4 work sessions)
  - Visual progress ring with countdown display

- **Session Management**
  - Automatic session switching
  - Session history tracking
  - Completed sessions counter
  - Current session type indicator

- **User Interface**
  - Modern, responsive design
  - Dark theme with clean aesthetics
  - Settings modal for customization
  - Visual progress indicators

- **Customization**
  - Adjustable session durations
  - Auto-start next session option
  - Session logging and history

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Anirudh192/Pomodoro-Timer.git
cd Pomodoro-Timer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **Vite** - Build tool and development server
- **react-circular-progressbar** - Progress ring component

## 📁 Project Structure

```
src/
├── components/
│   ├── Controls.tsx          # Timer control buttons
│   ├── ProgressRing.tsx      # Circular progress indicator with timer display
│   ├── SessionHistory.tsx    # Session tracking component
│   ├── SessionInfo.tsx       # Session information display
│   ├── SettingsModal.tsx     # Settings configuration
│   └── Timer.tsx             # Main timer component
├── store/
│   └── timerStore.ts         # Zustand state management
├── App.tsx                   # Main application component
├── index.css                 # Global styles
└── main.tsx                  # Application entry point
```

## 🎯 How to Use

1. **Start a Session**: Click the "Start" button to begin a 25-minute work session
2. **Take Breaks**: After each work session, the timer automatically switches to a break
3. **Track Progress**: Monitor your completed sessions in the session counter
4. **View Progress**: Watch the circular progress ring fill up as time progresses
5. **Customize Settings**: Click the settings button to adjust session durations
6. **View History**: Check your session history to track productivity

## 🎨 Progress Ring Component

The `ProgressRing` component features:
- **Dynamic Progress Calculation**: Shows progress based on session type and remaining time
- **Session-Aware Timing**: 
  - Work sessions: 25 minutes (1500 seconds)
  - Short breaks: 5 minutes (300 seconds)
  - Long breaks: 15 minutes (900 seconds)
- **Visual Design**:
  - Cyan progress path (`#22d3ee`)
  - Dark gray trail (`#1f2937`)
  - White text display
  - 192px × 192px responsive size
- **Time Display**: MM:SS format with zero-padding for consistent appearance

## ⚙️ Configuration

The timer comes with default settings:
- Work sessions: 25 minutes
- Short breaks: 5 minutes
- Long breaks: 15 minutes
- Long break after: 4 work sessions

You can customize these durations through the settings modal.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the Pomodoro Technique developed by Francesco Cirillo
- Built with modern React development practices
- Icons and design inspired by minimalist productivity apps
- Progress visualization powered by react-circular-progressbar

---

**Happy focusing! 🍅**