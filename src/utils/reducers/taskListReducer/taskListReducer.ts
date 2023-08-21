import { TaskListReducerState, TaskListReducer } from "types/reducers/taskListReducer/taskListReducer"
import { TASK_LIST_REDUCER_NAMES } from "utils/constants/reducers/taskListReducerNames/taskListReducerNames"

export const taskListReducer = (state: TaskListReducerState, action: TaskListReducer): TaskListReducerState => {
    switch (action.type) {
        case TASK_LIST_REDUCER_NAMES.setItem:
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case TASK_LIST_REDUCER_NAMES.setListState:
            return {
                ...action.payload
            }
        case TASK_LIST_REDUCER_NAMES.setList:
            return {
                ...state,
                items: action.payload
            }
        case TASK_LIST_REDUCER_NAMES.changeItem:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item._id === action.payload.id) {
                        return {
                            ...item,
                            ...action.payload.item,
                            _id: item._id
                        }
                    }
                    return item
                })
            }
        default:
            throw new Error('No action')
    }
}