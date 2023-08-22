import { deleteTaskGroupEndpoint } from "api/api"
import { GroupContext } from "context/GroupContext/GroupContext"
import { TaskGroupListContext } from "context/TaskGroupListContext/TaskGroupListContext"
import { useAppContext } from "hooks/context/useAppContext"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect } from "react"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const useDeleteTaskGroup = (taskGroupId: string) => {

    const [{ groupId }] = useAppContext(GroupContext)

    const [data, getData] = useFetchData<void>()

    const [taskGroups, setTaskGroups] = useAppContext(TaskGroupListContext)

    const { fetchStatus } = data

    const reqBody = deleteTaskGroupEndpoint({
        groupId,
        taskGroupId,
    })

    const sendReq = () => getData(reqBody)

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            setTaskGroups((state) => {
                return state.filter(item => item._id !== taskGroupId)
            })
        }
    }, [fetchStatus])

    return [data, sendReq] as const
}