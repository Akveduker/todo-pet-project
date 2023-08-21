import { GroupUser } from "types/groups/groups";
import { Task } from "types/task/task";

export type TaskContextType = (Omit<Task, 'personsId'> & { persons: GroupUser[] }) | null