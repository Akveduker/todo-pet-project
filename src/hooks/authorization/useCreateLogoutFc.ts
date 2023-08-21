import { logOutUser } from "store/reducers/userSlice/userSlice"
import { useAppDispatch } from "store/store"

export const useCreateLogoutFc = () => {
    const dispatch = useAppDispatch()
    const logOut = () => {
        dispatch(logOutUser())
    }
    return logOut
}