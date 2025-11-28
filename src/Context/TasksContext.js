import { createContext, useContext } from "react";

export const TaskContext = createContext({
  tasks: [],
  task: {
    id: 1221,
    title: "hello",
    isCompleted: false,
  },
  createTask() {},
  deleteTask() {},
  toggleCompleted() {},
});
export const TaskContextProvider = TaskContext.Provider;

export default function useTaskContext() {
  return useContext(TaskContext);
}
