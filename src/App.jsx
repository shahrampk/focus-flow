import React, { useState, useEffect } from "react";
import { Header, TasksSection, TimerSection } from "./Components";
import { TimerContextProvider } from "./Context/TimerContext";
import { TaskContextProvider } from "./Context/TasksContext";
import alarmSound from './assets/Alarm_tune.mp3';
export default function App() {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setmode] = useState("work");
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer finished
      setIsActive(false);
     const audio = new Audio(alarmSound);
     audio.play();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);
  const timerContextValue = {
    mode,
    setmode,
    formatTime,
    timeLeft,
    setTimeLeft,
    isActive,
    setIsActive,
  };
  // Todos Fucntionality
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const createTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };
  const toggleCompleted = (id) => {
    setTasks([
      ...tasks.map((task) => {
        return task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task;
      }),
    ]);
    // console.log(tasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900 text-white flex items-center justify-center sm:p-4 font-sans">
      <div className="w-full sm:max-w-md bg-white/10 backdrop-blur-lg sm:border border-white/20 sm:rounded-3xl shadow-2xl overflow-hidden">
        <Header />
        <TimerContextProvider value={timerContextValue}>
          <TimerSection />
        </TimerContextProvider>
        {/* <TasksSection /> */}
        <TaskContextProvider
          value={{ tasks, setTasks, createTask, deleteTask, toggleCompleted }}
        >
          <TasksSection />
        </TaskContextProvider>
      </div>
    </div>
  );
}
