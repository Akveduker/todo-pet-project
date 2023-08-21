import { deleteTaskEndpoint } from 'api/api';
import { TaskListContext } from 'context/TaskListContext/TaskListContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect } from 'react';
import { VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import { useGetIdsForTask } from './useGetIdsForTask';

export const useDeleteTask = () => {

    const ids = useGetIdsForTask()

    const { state, setList } = useAppContext(TaskListContext)

    const [data, getData] = useFetchData<void>()

    const { fetchStatus } = data

    const reqBody = deleteTaskEndpoint(ids)

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            setList(state.items.filter(item => item._id !== ids.taskId))
        }
    }, [fetchStatus])

    const deleteTask = () => getData(reqBody)

    return [data, deleteTask] as const
}