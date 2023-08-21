import { UsersListContextItem } from "types/context/usersListContext/usersListContext";
import { GroupUser } from "types/groups/groups";
import { UsersListReducer } from "types/reducers/usersListReducer/usersListReducer";
import { USRES_LIST_REDUCER_NAMES } from "utils/constants/reducers/usersListReducerNames/usersListReducerNames";

export const usersListReducer = (state: UsersListContextItem[], action: UsersListReducer): UsersListContextItem[] => {
    switch (action.type) {
        case USRES_LIST_REDUCER_NAMES.changeUser:
            return state.map(user => {
                if (user._id === action.payload._id) {
                    return { ...user, isIn: action.payload.isIn }
                }
                return user
            })
        case USRES_LIST_REDUCER_NAMES.setActiveUsersFalse:
            return state.map(user => {
                return {
                    ...user,
                    isIn: false,
                }
            })
        default:
            throw new Error('no action types')
    }

}