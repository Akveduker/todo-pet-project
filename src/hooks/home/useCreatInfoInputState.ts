import { userPatchEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect, useRef, useState } from "react"
import { setUser } from "store/reducers/userSlice/userSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import { InputValidationItem } from "types/form/inputValidation/inputValidation"
import { User } from "types/user/user"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"
import { userSelector } from "utils/helpers/selectors/userSelector/userSelector"

export const useCreateInfoInputState = (value: string, inputName: string) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const [data, sendData, changeDataState] = useFetchData<User>()

    const [disabledState, setDisabled] = useState(true)

    const userId = useAppSelector(userSelector)._id

    const requestBody = userPatchEndpoint({
        _id: userId,
        [inputName]: value,
    })

    useEffect(() => {
        if (data.fetchStatus === VAL_SUCCESS) {
            dispatch(setUser(data.data))
        }
    }, [data.fetchStatus])

    const changeButtonState = () => {
        setDisabled(!disabledState)
        inputRef.current?.focus()
        if (!disabledState) {
            sendData(requestBody)
        }
    }
    return {
        changeButtonState,
        data,
        disabledState,
        inputRef,
        changeDataState
    }
}