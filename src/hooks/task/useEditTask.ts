import { editTaskEndpoint } from "api/api"
import { useAppContext } from "hooks/context/useAppContext"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { Task, TaskForEdit } from "types/task/task"
import { useGetIdsForTask } from "./useGetIdsForTask"
import { TaskContext } from "context/TaskContext/TaskContext"

export const useEditTask = () => {
    const ids = useGetIdsForTask()
    const { persons, _id, ...currentTask } = useAppContext(TaskContext)
    const [data, getData] = useFetchData<Task>()

    const editTask = (task: TaskForEdit) => {
        const reqBody = editTaskEndpoint({
            ...ids,
            ...currentTask,
            ...task
        })
        getData(reqBody)

    }

    return [data, editTask] as const
}