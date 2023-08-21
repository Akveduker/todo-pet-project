import { createContext } from "react";
import { TaskListContextType } from "types/context/taskListContext/TaskListContext";

export const TaskListContext = createContext<TaskListContextType>(null)