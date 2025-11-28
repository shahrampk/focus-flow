import { Check, Trash2 } from "lucide-react";
import useTaskContext from "../Context/TasksContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleCompleted } = useTaskContext();

  return (
    <div
      className={`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
        task.isCompleted
          ? "bg-emerald-900/20 border-emerald-900/30 opacity-60"
          : "bg-white/5 border-white/5 hover:bg-white/10"
      }`}
    >
      <button
        onClick={() => toggleCompleted(task.id, task.isCompleted)}
        className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors cursor-pointer ${
          task.isCompleted
            ? "bg-emerald-500 border-emerald-500 text-white"
            : "border-slate-500 text-transparent hover:border-indigo-400"
        }`}
      >
        <Check size={12} strokeWidth={4} />
      </button>

      <span
        className={`flex-1 text-sm truncate ${
          task.isCompleted ? "line-through text-slate-400" : "text-slate-200"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-slate-500 cursor-pointer hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TaskItem;
