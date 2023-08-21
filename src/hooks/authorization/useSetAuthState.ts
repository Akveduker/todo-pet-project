import { useEffect } from "react"
import { setUser } from "store/reducers/userSlice/userSlice"
import { useAppDispatch } from "store/store"
import { AuthReturnType } from "types/auth/auth"
import { DataFetch } from "types/dataFetch/dataFetch"
import Cookies from 'js-cookie'
import { storageNames } from "utils/constants/storageNames/storageNames"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const useSetAuthState = (result: DataFetch<AuthReturnType>) => {
    const dispatch = useAppDispatch()
    const { fetchStatus } = result
    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            Cookies.set(storageNames.token, result.data.token)
            dispatch(setUser(result.data.data))
        }
    }, [fetchStatus, dispatch])
}