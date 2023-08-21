import { RootState } from "store/store"

export const userSelector = (state: RootState) => {
    return state.user
}