import { groupPageEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { GroupContextTypeUserTuple } from "types/context/groupContext/groupContext"
import { idLength } from "utils/constants/idLength/idLength"
import { VAL_IDLE } from "utils/constants/validationTypes/validationTypes"

export const useCheckIsIdValid = () => {
    const { id } = useParams()
    const [data, getData, setFetchDataStatus] = useFetchData<GroupContextTypeUserTuple>()

    useEffect(() => {
        if (id && data.fetchStatus === VAL_IDLE) {
            const requestBody = groupPageEndpoint({ groupId: id, })
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