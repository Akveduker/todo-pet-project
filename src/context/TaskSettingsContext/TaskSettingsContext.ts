import { createContext } from "react";
import { TaskSettingsContextType } from "types/context/taskSettingsContext/taskSettingsContext";

export const TaskSettingsContext = createContext<TaskSettingsContextType>(null)