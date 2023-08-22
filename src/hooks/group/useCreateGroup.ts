import { groupCreateEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useCreateValidationState } from "hooks/inputValidation/useCreateValidationState/useCreateValidationState"
import { useEffect } from "react"
import { setGroups } from "store/reducers/userSlice/userSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import { FormatedGroup } from "types/groups/groups"
import { valObjectCreateGroup } from "utils/constants/valObjects/valObjectCreateGroup"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useCreateGroup = () => {

    const storeDispatch = useAppDispatch()

    const { groups } = useAppSelector(userSelector)


    const [validationState, dispatch] = useCreateValidationState(valObjectCreateGroup)

    const [data, getData, setDataFetchState] = useFetchData<FormatedGroup>()

    const { name, password } = validationState

    const { fetchStatus } = data

    const createGroup = () => {
        const requestBody = groupCreateEndpoint({
            name: name.value,
            password: password.value,
        })
        getData(requestBody)
    }

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            storeDispatch(setGroups(groups.concat(data.data)))
        }
    }, [fetchStatus])

    return {
        createGroup,
        fetchData: data,
        setDataFetchState,
        validationState: [validationState, dispatch] as const
    }

}