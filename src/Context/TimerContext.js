import { createContext, useContext } from "react";

export const TimerContext = createContext();

export const TimerContextProvider = TimerContext.Provider;

export default function useTimerContext() {
  return useContext(TimerContext);
}
