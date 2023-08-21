import { MongoValues } from "types/back/back";
import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_NOT_STARTED } from "utils/constants/taskStatuses/taskStatuses";

export type TaskStatus = typeof TASK_STATUS_DONE | typeof TASK_STATUS_IN_PROGRESS | typeof TASK_STATUS_NOT_STARTED;

export interface Task extends MongoValues {
    name: string;
    personsId: string[];
    taskDate: TaskDate;
    taskStatus: TaskStatus;
}

export type TaskDate = [string, (string | null)]

export interface TaskGroup extends MongoValues {
    name: string;
    color: string;
    dates: TaskDate;
    personsId: string[];
    tasks: string[];
}

export type GetTaskEndpoin = {
    tasksIdsArr: string[]
}
export type DeleteTaskEndpoint = {
    userId: string;
    taskId: string;
    taskGroupId: string;
    groupId: string;
}
export type TaskForEdit = Partial<Omit<Task, '_id'>>

export type EditTaskEndpoint = {
    userId: string;
    taskId: string;
    taskGroupId: string;
    groupId: string;
} & TaskForEdit


export type CreateTaskEndpoint = {
    groupId: string;
    taskGroupId: string;
    creatorId: string;
} & Pick<Task, 'personsId' | 'taskDate' | 'taskStatus' | 'name'>