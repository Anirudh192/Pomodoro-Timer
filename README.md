<h1 align="center">🍅 Pomodoro Timer</h1>
<p align="center">⏳ Boost your productivity with a clean, customizable Pomodoro Timer built with React, TypeScript, and Tailwind CSS.</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/react-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/tailwindcss-3-38b2ac?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/zustand-state-yellow?style=for-the-badge" />
</p>

---

## ✨ Features

### ⏱️ Timer Functionality
- 🕒 25-minute work sessions
- 🛌 5-minute short breaks
- 🌙 15-minute long breaks (after 4 work sessions)
- 🔄 Visual progress ring with countdown

### 🔁 Session Management
- 🔃 Auto session switching
- 📈 Session history tracking
- ✅ Completed session counter
- 🔍 Session type indicator

### 🧑‍🎨 User Interface
- 🌗 Dark, minimalist design
- ⚙️ Settings modal for preferences
- 📊 Visual session indicators
- 📱 Responsive UI

### 🧩 Customization
- ✏️ Editable session durations
- 🚀 Auto-start next session toggle
- 📚 Session logging

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 🧪 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Anirudh192/Pomodoro-Timer.git
cd Pomodoro-Timer

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 🧱 Tech Stack

| Category        | Tools                              |
|----------------|-------------------------------------|
| 💻 Frontend     | React + TypeScript                  |
| 🎨 Styling      | Tailwind CSS                        |
| 🧠 State Mgmt   | Zustand                             |
| ⚙️ Build Tool   | Vite                                |
| 🔄 Components   | react-circular-progressbar          |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Controls.tsx          # Timer control buttons
│   ├── ProgressRing.tsx      # Circular progress indicator
│   ├── SessionHistory.tsx    # Session tracker
│   ├── SessionInfo.tsx       # Session display
│   ├── SettingsModal.tsx     # Customization modal
│   └── Timer.tsx             # Main timer
├── store/
│   └── timerStore.ts         # Zustand store
├── App.tsx                   # App root
├── index.css                 # Global styles
└── main.tsx                  # Entry point
```

---

## 🎯 How to Use

1. ▶️ Click **Start** to begin a 25-minute session
2. 🛑 Timer auto-switches to break after each work session
3. 🔄 Repeat to build up session streaks
4. 🎨 Track progress via circular timer
5. ⚙️ Customize durations in **Settings**
6. 📈 View session history for insights

---

## 🎨 Progress Ring Details

- 🧠 Session-aware timing (25/5/15 mins)
- 🌈 Colorful progress bar (`#22d3ee` cyan)
- 🌑 Trail stroke (`#1f2937` dark gray)
- ⌛ Displays MM:SS format with padding
- 📏 Size: 192px × 192px (responsive)

---

## ⚙️ Default Configuration

- ⏱ Work: 25 mins  
- 🌴 Short Break: 5 mins  
- 🌙 Long Break: 15 mins  
- 🔄 Long break after: 4 work sessions  

Customizable via settings modal.

---

## 🤝 Contributing

1. 🍴 Fork the repo  
2. 🌿 Create a branch: `git checkout -b feature/AmazingFeature`  
3. ✅ Commit: `git commit -m 'Add AmazingFeature'`  
4. 🚀 Push: `git push origin feature/AmazingFeature`  
5. 🔁 Submit a PR

---

## 📝 License

Released under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- 🎓 Inspired by the **Pomodoro Technique** by Francesco Cirillo  
- 💡 Built with modern frontend tools and patterns  
- 📦 Progress visuals powered by **react-circular-progressbar**  
- 🎨 UI inspired by minimalist productivity apps

---

## 💻 Demo

> Coming soon! 🚧

---

<p align="center"><strong>Stay focused, stay sharp! 🍅</strong></p>
