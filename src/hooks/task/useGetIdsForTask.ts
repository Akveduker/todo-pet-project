import { GroupContext } from "context/GroupContext/GroupContext"
import { TaskContext } from "context/TaskContext/TaskContext"
import { TaskGroupContext } from "context/TaskGroupContext/TaskGroupContext"
import { useAppContext } from "hooks/context/useAppContext"
import { useAppSelector } from "store/store"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useGetIdsForTask = () => {

    const [{ groupId }] = useAppContext(GroupContext)

    const [{ _id: taskGroupId }] = useAppContext(TaskGroupContext)

    const { _id: taskId } = useAppContext(TaskContext)

    const { _id: userId } = useAppSelector(userSelector)

    return {
        groupId,
        taskGroupId,
        taskId,
        userId
    }
}