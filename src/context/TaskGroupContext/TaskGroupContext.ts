import { createContext } from "react";
import { TaskGroupContextType } from "types/context/taskGroupContext/taskGroupContext";

export const TaskGroupContext = createContext<TaskGroupContextType>(null)