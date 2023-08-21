import { useEffect } from "react"
import { setUser } from "store/reducers/userSlice/userSlice"
import { useAppDispatch } from "store/store"
import { DataFetch } from "types/dataFetch/dataFetch"
import { User } from "types/user/user"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const useSetAuthState = (result: DataFetch<User>) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (result.fetchStatus === VAL_SUCCESS) {
            dispatch(setUser(result.data))
        }
    }, [result.fetchStatus, dispatch])
}