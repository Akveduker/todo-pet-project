import { TaskContext } from "context/TaskContext/TaskContext"
import { useAppContext } from "hooks/context/useAppContext"
import { useCheckIsUserAdmin } from "hooks/group/useCheckIsUserAdmin"
import { useAppSelector } from "store/store"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useCheckUserInTask = () => {
    const isAdmin = useCheckIsUserAdmin()
    const { persons } = useAppContext(TaskContext)
    const { _id } = useAppSelector(userSelector)
    const person = persons.find((person) => _id === person._id)
    return !!person || isAdmin
}