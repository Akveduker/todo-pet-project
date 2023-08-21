import { TaskGroupContext } from "context/TaskGroupContext/TaskGroupContext"
import { useAppContext } from "hooks/context/useAppContext"
import { useCheckIsUserAdmin } from "hooks/group/useCheckIsUserAdmin"
import { useAppSelector } from "store/store"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useCheckIsUserTaskGroupUser = () => {
    const isAdmin = useCheckIsUserAdmin()
    const { _id } = useAppSelector(userSelector)
    const [{ persons }] = useAppContext(TaskGroupContext)
    const person = persons.find((person) => _id === person._id)
    return !!person || isAdmin
}