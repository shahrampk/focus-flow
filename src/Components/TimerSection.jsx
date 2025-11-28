import { Pause, Play, RotateCcw } from "lucide-react";
import SwitchBtn from "./SwitchBtn";
import useTimerContext from "../Context/TimerContext";

const TimerSection = () => {
  const { formatTime, setTimeLeft, timeLeft, setIsActive, isActive, mode } =
    useTimerContext();

  return (
    <div className="p-8 flex flex-col items-center">
      {/* Mode Switcher */}
      <SwitchBtn />

      {/* Big Timer Display */}
      <div className="relative mb-8 group cursor-default select-none">
        <p
          className={`text-7xl sm:text-8xl font-black tracking-tight transition-colors duration-500 tabular-nums ${
            isActive ? "text-white" : "text-white/70"
          }`}
        >
          {formatTime(timeLeft)}
        </p>
        {isActive && (
          <div className="absolute -inset-4 bg-indigo-500/20 blur-xl rounded-full animate-pulse -z-10"></div>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`p-4 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg cursor-pointer ${
            isActive
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-white text-indigo-900 hover:bg-slate-200"
          }`}
        >
          {isActive ? (
            <Pause size={28} fill="currentColor" />
          ) : (
            <Play size={28} fill="currentColor" className="ml-1" />
          )}
        </button>
        <button
          onClick={() => {
            mode === "work" ? setTimeLeft(30 * 60) : setTimeLeft(5 * 60);
            setIsActive(false);
          }}
          className="p-4 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10"
        >
          <RotateCcw size={24} />
        </button>
      </div>
    </div>
  );
};

export default TimerSection;
