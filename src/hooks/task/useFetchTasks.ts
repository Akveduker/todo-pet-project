import { getTaskListEndpoint } from 'api/api';
import { TaskGroupContext } from 'context/TaskGroupContext/TaskGroupContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect } from "react"
import { Task } from "types/task/task"
import { VAL_IDLE } from "utils/constants/validationTypes/validationTypes"

export const useFetchTask = () => {

    const [{ tasks }] = useAppContext(TaskGroupContext)

    const [data, getData] = useFetchData<Task[]>()

    const { fetchStatus } = data

    const reqBody = getTaskListEndpoint({
        tasksIdsArr: tasks,
    })

    useEffect(() => {
        if (fetchStatus === VAL_IDLE) {
            getData(reqBody)
        }
    }, [fetchStatus])
    return [data]
}