import { Brain, Coffee } from "lucide-react";
import React, { useEffect } from "react";
import useTimerContext from "../Context/TimerContext";

const SwitchBtn = () => {
  const { mode, setmode, setTimeLeft, setIsActive } = useTimerContext();
  useEffect(() => {}, [mode]);
  return (
    <div>
      {/* Mode Switcher */}
      <div className="flex bg-black/20 p-1 rounded-full mb-8">
        <button
          onClick={() => {
            setIsActive(false);
            setmode("work");
            setTimeLeft(30 * 60);
          }}
          className={`flex items-center cursor-pointer gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${
            mode === "work"
              ? "bg-indigo-600 text-white shadow-lg"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Brain size={16} /> Work
        </button>
        <button
          onClick={() => {
            setIsActive(false);
            setTimeLeft(5 * 60);
            setmode("break");
          }}
          className={`flex items-center cursor-pointer gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all text-slate-400 hover:text-white ${
            mode === "break"
              ? "bg-emerald-600 text-white shadow-lg"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Coffee size={16} /> Break
        </button>
      </div>
    </div>
  );
};

export default SwitchBtn;
