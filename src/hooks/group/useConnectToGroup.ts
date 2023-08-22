import { groupConnectEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useCreateValidationState } from "hooks/inputValidation/useCreateValidationState/useCreateValidationState"
import { useEffect } from "react"
import { setGroups } from "store/reducers/userSlice/userSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import { FormatedGroup } from "types/groups/groups"
import { idLength } from "utils/constants/idLength/idLength"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { inputValidators } from "utils/constants/validators/validators"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"
import { lengthValidator } from "utils/helpers/validators/lengthValidator/lengthValidator"
import { withErrorCreator } from "utils/helpers/validators/withErrorCreator/withErrorCreator"

export const useConnectToGroup = () => {
    const { _id, groups } = useAppSelector(userSelector)

    const storeDispatch = useAppDispatch()

    const valArr = {
        id: {
            validators: [withErrorCreator('id слишком короткий', lengthValidator(idLength))],
        },
        password: {
            validators: inputValidators.password,
        },
    }

    const [validationState, dispatch] = useCreateValidationState(valArr)

    const [data, getData, setDataFetchState] = useFetchData<FormatedGroup>()

    const { id, password } = validationState

    const { fetchStatus } = data

    const createGroup = () => {
        const requestBody = groupConnectEndpoint({
            groupId: id.value,
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
        fetchData: data,
        createGroup,
        validationState: [validationState, dispatch] as const,
        setDataFetchState
    }
}