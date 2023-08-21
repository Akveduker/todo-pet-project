import { useReducer } from "react"
import { UsersListContextItem } from "types/context/usersListContext/usersListContext"
import { USRES_LIST_REDUCER_NAMES } from "utils/constants/reducers/usersListReducerNames/usersListReducerNames"
import { usersListReducer } from "utils/reducers/usersListReducer/usersListReducer"

export const useCreateUsersListState = (usersList: UsersListContextItem[]) => {

    const [state, dispatch] = useReducer(usersListReducer, usersList)

    const changeUser = (user: UsersListContextItem) => {
        dispatch({
            type: USRES_LIST_REDUCER_NAMES.changeUser,
            payload: user,
        })
    }
    const setUsersFalse = () => {
        dispatch({
            type: USRES_LIST_REDUCER_NAMES.setActiveUsersFalse
        })
    }
    return {
        state,
        changeUser,
        setUsersFalse,
    }
}