import { groupDeleteEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { setGroups } from "store/reducers/userSlice/userSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import { routes } from "utils/constants/routes/routes"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useDeleteGroup = (groupId: string) => {
    const { groups } = useAppSelector(userSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [data, sendReq] = useFetchData<void>()

    const requestBody = groupDeleteEndpoint({
        groupId
    })

    const deleteGroup = () => {
        sendReq(requestBody)
    }

    useEffect(() => {
        if (data.fetchStatus === VAL_SUCCESS) {
            dispatch(setGroups(groups.filter(item => item._id !== groupId)))
            navigate(`${routes.home}`)
        }
    }, [data.fetchStatus])

    return [deleteGroup, data] as const
}