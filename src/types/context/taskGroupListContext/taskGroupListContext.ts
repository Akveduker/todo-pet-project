import { UseStateType } from "types/state/state";
import { TaskGroup } from "types/task/task";

export type TaskGroupListContextType = UseStateType<TaskGroup[]> | null