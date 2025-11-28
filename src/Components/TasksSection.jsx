import { Plus } from "lucide-react";
import TaskItem from "./TaskItem";
import useTaskContext from "../Context/TasksContext";
import { useState } from "react";

const TasksSection = () => {
  const { tasks, createTask } = useTaskContext();
  const [title, setTitle] = useState("");

  return (
    <div className="bg-black/20 p-6 h-80 flex flex-col">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
        <span>Tasks</span>
        <span className="bg-white/10 px-2 py-0.5 rounded text-xs text-white">
          {tasks.filter((task) => !task.isCompleted).length} pending
        </span>
      </h2>

      {/* Input Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title) {
            createTask({
              id: Date.now(),
              title: title,
              isCompleted: false,
            });
            setTitle("");
          }
        }}
        className="relative mb-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all placeholder-slate-500"
        />
        <button className="absolute right-2 top-2 p-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition-colors cursor-pointer">
          <Plus size={18} />
        </button>
      </form>

      {/* Task List */}
      <div className="task-list flex-1 overflow-y-auto space-y-2 pr-1">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p className="text-center text-slate-500 mt-8 text-sm italic">
            No tasks yet. Time to focus!
          </p>
        )}
      </div>
    </div>
  );
};

export default TasksSection;
