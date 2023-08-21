import { createContext } from "react";
import { TaskGroupListContextType } from "types/context/taskGroupListContext/taskGroupListContext";

export const TaskGroupListContext = createContext<TaskGroupListContextType>(null)