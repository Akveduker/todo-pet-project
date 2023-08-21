import { GroupUser } from "types/groups/groups";
import { UseStateType } from "types/state/state";
import { TaskGroup } from "types/task/task";
export type TaskGroupContextItem = Omit<TaskGroup, 'personsId'> & { persons: GroupUser[] }
export type TaskGroupContextType = UseStateType<TaskGroupContextItem> | null;