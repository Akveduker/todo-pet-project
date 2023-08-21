import { UsersListContextItem } from "types/context/usersListContext/usersListContext";
import { USRES_LIST_REDUCER_NAMES } from "utils/constants/reducers/usersListReducerNames/usersListReducerNames"

export type UsersListReducer = {
    type: typeof USRES_LIST_REDUCER_NAMES.changeUser;
    payload: UsersListContextItem
} | {
    type: typeof USRES_LIST_REDUCER_NAMES.setActiveUsersFalse;
}