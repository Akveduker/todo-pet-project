import { useState, useEffect, useReducer } from "react"
import { TaskListContextState } from "types/context/taskListContext/TaskListContext"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { convertDataFetchInToDataFetchState } from "utils/helpers/converters/convertDataFetchInToDataFetchState/convertDataFetchInToDataFetchState"
import { useFetchTask } from "./useFetchTasks"
import { TaskListReducerState } from "types/reducers/taskListReducer/taskListReducer"
import { taskListReducer } from "utils/reducers/taskListReducer/taskListReducer"
import { Task, TaskForEdit } from "types/task/task"
import { TASK_LIST_REDUCER_NAMES } from "utils/constants/reducers/taskListReducerNames/taskListReducerNames"
import { useAppContext } from "hooks/context/useAppContext"
import { GroupContext } from "context/GroupContext/GroupContext"
import { TaskGroupContext } from "context/TaskGroupContext/TaskGroupContext"

export const useCreateTaskListContext = () => {
    const [data] = useFetchTask()
    const { fetchStatus } = data
    const [groupState, setGroupState] = useAppContext(TaskGroupContext)
    const initialState: TaskListReducerState = {
        items: [],
        status: convertDataFetchInToDataFetchState(data),
    }
    const [state, dispatch] = useReducer(taskListReducer, initialState)

    const setItem = (item: Task) => {
        dispatch({
            type: TASK_LIST_REDUCER_NAMES.setItem,
            payload: item
        })
        setGroupState({
            ...groupState,
            tasks: groupState.tasks.concat(item._id)
        })
    }

    const setListState = (state: TaskListReducerState) => {
        dispatch({
            type: TASK_LIST_REDUCER_NAMES.setListState,
            payload: state
        })
    }

    const setList = (list: Task[]) => {
        dispatch({
            type: TASK_LIST_REDUCER_NAMES.setList,
            payload: list
        })
    }

    const chageItem = (id: string, item: TaskForEdit) => {
        dispatch({
            type: TASK_LIST_REDUCER_NAMES.changeItem,
            payload: {
                id,
                item
            }
        })
    }

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            setListState({
                items: data.data,
                status: convertDataFetchInToDataFetchState(data),
            })
        }
    }, [fetchStatus])

    return {
        state,
        setItem,
        setListState,
        setList,
        chageItem
    }
}