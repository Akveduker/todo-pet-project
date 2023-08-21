import { TaskStatus } from "types/task/task"
import { useEditTask } from "./useEditTask"
import { useEffect } from "react"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { useAppContext } from "hooks/context/useAppContext"
import { TaskListContext } from "context/TaskListContext/TaskListContext"
import { TaskSettingsContext } from "context/TaskSettingsContext/TaskSettingsContext"

export const useChangeTaskStatus = () => {
    const [data, editTask] = useEditTask()
    const { chageItem } = useAppContext(TaskListContext)
    const { isUsed } = useAppContext(TaskSettingsContext)
    const { fetchStatus } = data
    const [isUsedState, setIsUsed] = isUsed

    const changeTaskStatus = (taskStatus: TaskStatus) => {
        editTask({ taskStatus })
    }

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            chageItem(data.data._id, { taskStatus: data.data.taskStatus })
        }
    }, [fetchStatus])

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            setIsUsed(true)
        }
    }, [fetchStatus])

    return [data, changeTaskStatus] as const
}