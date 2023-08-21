import { DataFetchNoData, DataFetchError } from "types/dataFetch/dataFetch";
import { Task } from "types/task/task";
import { TASK_LIST_REDUCER_NAMES } from "utils/constants/reducers/taskListReducerNames/taskListReducerNames";
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes";

export type TaskListReducerState = {
    items: Task[];
    status: DataFetchNoData | DataFetchError | {
        fetchStatus: typeof VAL_SUCCESS;
    }
}

export type TaskListReducer = {
    type: typeof TASK_LIST_REDUCER_NAMES.setItem;
    payload: Task,
} | {
    type: typeof TASK_LIST_REDUCER_NAMES.setListState;
    payload: TaskListReducerState;
} | {
    type: typeof TASK_LIST_REDUCER_NAMES.setList;
    payload: Task[];
} | {
    type: typeof TASK_LIST_REDUCER_NAMES.changeItem;
    payload: {
        item: Partial<Task>,
        id: string,
    };
}