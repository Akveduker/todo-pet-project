import { authEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logOutUser, setUser } from "store/reducers/userSlice/userSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import { User, UserStorage } from "types/user/user"
import { routes } from "utils/constants/routes/routes"
import { storageNames } from "utils/constants/storageNames/storageNames"
import { VAL_ERROR, VAL_IDLE, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"
import { getParsedItemFromStorage } from "utils/helpers/storage/getParsedItemFromStorage"

export const useCheckIsUserLoggedIn = () => {
    const isLogged = useAppSelector(userSelector).isLogged
    const storage = getParsedItemFromStorage<UserStorage>(storageNames.user)
    const dispatch = useAppDispatch()
    const [data, getData] = useFetchData<User>();
    const navigate = useNavigate()
    useEffect(() => {
        if (data.fetchStatus === VAL_SUCCESS) {
            dispatch(setUser(data.data))
        }
        if (data.fetchStatus === VAL_ERROR) {

            dispatch(logOutUser())
            navigate(`/${routes.auth}`)
        }
    }, [data.fetchStatus])
    if (!storage) return VAL_ERROR
    if (isLogged) return VAL_SUCCESS

    const sendReq = () => {
        if (data.fetchStatus === VAL_IDLE) {
            (() => {
                const requestBody = authEndpoint({
                    email: storage.email,
                    password: storage.password
                })
                getData(requestBody)
            })()
        }
    }
    if (!isLogged || data.fetchStatus === VAL_IDLE) {
        sendReq()
    }
    return data.fetchStatus
}