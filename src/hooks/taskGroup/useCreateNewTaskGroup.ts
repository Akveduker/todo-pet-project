import { createTaskGroupEndpoint } from "api/api"
import { GroupContext } from "context/GroupContext/GroupContext"
import { TaskGroupListContext } from "context/TaskGroupListContext/TaskGroupListContext"
import { useAppContext } from "hooks/context/useAppContext"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useCreateValidationState } from "hooks/inputValidation/useCreateValidationState/useCreateValidationState"
import { useCreateUsersListState } from "hooks/usersList/useCreateUsersListState"
import { useEffect } from "react"
import { TaskGroup } from "types/task/task"
import { valObjectCreateNewTaskGroup } from "utils/constants/valObjects/valObjectCreateNewTaskGroup"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { convertUsersListInContextList } from "utils/helpers/converters/convertUsersListInContextList/convertUsersListInContextList"
import { dateConvert } from "utils/helpers/converters/dateConvert/dateConvert"

export const useCreateNewTaskGroup = () => {

    const [{ usersArray, groupId }] = useAppContext(GroupContext)

    const [state, setTaskListContext] = useAppContext(TaskGroupListContext)

    const [validationState, dispatch] = useCreateValidationState(valObjectCreateNewTaskGroup)

    const usersListState = useCreateUsersListState(convertUsersListInContextList(usersArray))

    const [data, getData, setDataFetchState] = useFetchData<TaskGroup>()

    const { name, color, date } = validationState

    const { fetchStatus } = data

    const createGroup = () => {
        const requestBody = createTaskGroupEndpoint({
            name: name.value,
            color: color.value,
            personsId: usersListState.state.filter(item => item.isIn).map(item => item._id),
            groupId,
            dates: dateConvert(date.value)
        })
        getData(requestBody)
    }

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            setTaskListContext((prev) => {
                return prev.concat(data.data)
            })
            usersListState.setUsersFalse()
        }
    }, [fetchStatus])

    return {
        createGroup,
        fetchData: data,
        validationState: [validationState, dispatch] as const,
        usersListState,
        setDataFetchState
    }
}