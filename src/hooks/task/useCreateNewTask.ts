import { createTaskEndpoint } from "api/api"
import { GroupContext } from "context/GroupContext/GroupContext"
import { TaskGroupContext } from "context/TaskGroupContext/TaskGroupContext"
import { TaskListContext } from "context/TaskListContext/TaskListContext"
import { useAppContext } from "hooks/context/useAppContext"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useCreateValidationState } from "hooks/inputValidation/useCreateValidationState/useCreateValidationState"
import { useCreateUsersListState } from "hooks/usersList/useCreateUsersListState"
import { useEffect } from "react"
import { useAppSelector } from "store/store"
import { Task } from "types/task/task"
import { TASK_STATUS_NOT_STARTED } from "utils/constants/taskStatuses/taskStatuses"
import { valObjectCreateNewTask } from "utils/constants/valObjects/valObjectCreateNewTask"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { convertUsersListInContextList } from "utils/helpers/converters/convertUsersListInContextList/convertUsersListInContextList"
import { dateConvert } from "utils/helpers/converters/dateConvert/dateConvert"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useCreateNewTask = () => {

    const [{ groupId, usersArray }] = useAppContext(GroupContext)

    const creatorId = useAppSelector(userSelector)._id

    const [{ _id: taskGroupId, persons }] = useAppContext(TaskGroupContext)

    const { setItem } = useAppContext(TaskListContext)

    const [data, getData, setDataFetchState] = useFetchData<Task>()

    const [validationState, dispatch] = useCreateValidationState(valObjectCreateNewTask)

    const { name, date } = validationState

    const { fetchStatus } = data


    const usersInGroup = convertUsersListInContextList(persons)

    const usersListState = useCreateUsersListState(usersInGroup)

    const createTask = () => {
        const filteredUsers = usersListState.state.filter(item => item.isIn)
        const reqBody = createTaskEndpoint({
            name: name.value,
            taskDate: dateConvert(date.value),
            personsId: filteredUsers.length === 0 ? [creatorId] : filteredUsers.map(({ _id }) => _id),
            taskGroupId,
            groupId,
            taskStatus: TASK_STATUS_NOT_STARTED,
        })
        getData(reqBody)
    }

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            setItem(data.data)
            usersListState.setUsersFalse()

        }
    }, [fetchStatus])

    return {
        fetchData: data,
        validationState: [validationState, dispatch] as const,
        createTask,
        setDataFetchState,
        usersListState,
    }
}