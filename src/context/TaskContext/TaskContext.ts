import { createContext } from "react";
import { TaskContextType } from "types/context/taskContext/taskContext";
import { Task } from "types/task/task";

export const TaskContext = createContext<TaskContextType>(null)