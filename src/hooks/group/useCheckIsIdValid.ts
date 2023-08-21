import { groupPageEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppSelector } from "store/store"
import { GroupContextType, GroupContextTypeUserTuple } from "types/context/groupContext/groupContext"
import { idLength } from "utils/constants/idLength/idLength"
import { VAL_IDLE } from "utils/constants/validationTypes/validationTypes"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useCheckIsIdValid = () => {
    const { id } = useParams()
    const userId = useAppSelector(userSelector)._id
    const [data, getData, setFetchDataStatus] = useFetchData<GroupContextTypeUserTuple>()

    useEffect(() => {
        if (id && data.fetchStatus === VAL_IDLE) {
            const requestBody = groupPageEndpoint({ groupId: id, userId })
            getData(requestBody)
        }
    }, [data.fetchStatus])

    useEffect(() => {
        setFetchDataStatus({ fetchStatus: VAL_IDLE })
    }, [id])

    if (!id) return false
    if (typeof id !== 'string' || id.length !== idLength) return false
    return data
}