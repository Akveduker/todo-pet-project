import { getUserEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import Cookies from "js-cookie"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logOutUser, setUser } from "store/reducers/userSlice/userSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import { User } from "types/user/user"
import { routes } from "utils/constants/routes/routes"
import { storageNames } from "utils/constants/storageNames/storageNames"
import { VAL_ERROR, VAL_IDLE, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useCheckIsUserLoggedIn = () => {
    const isLogged = useAppSelector(userSelector).isLogged
    const token = Cookies.get(storageNames.token)
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

    if (!token) return VAL_ERROR
    if (isLogged) return VAL_SUCCESS

    const sendReq = () => {
        if (data.fetchStatus === VAL_IDLE) {
            (() => {
                const requestBody = getUserEndpoint()
                getData(requestBody)
            })()
        }
    }
    if (!isLogged || data.fetchStatus === VAL_IDLE) {
        sendReq()
    }
    return data.fetchStatus
}