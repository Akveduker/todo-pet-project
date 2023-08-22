import { userPatchEndpoint } from "api/api"
import { useFetchData } from "hooks/dataFetch/useFetchData"
import { useEffect, useRef, useState } from "react"
import { setUser } from "store/reducers/userSlice/userSlice"
import { useAppDispatch } from "store/store"
import { User } from "types/user/user"
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const useCreateInfoInputState = (value: string, inputName: string) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const [data, sendData, changeDataState] = useFetchData<User>()

    const [disabledState, setDisabled] = useState(true)


    const requestBody = userPatchEndpoint({
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