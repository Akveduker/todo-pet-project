import { Dispatch, SetStateAction, useEffect } from "react"
import { DataFetch } from "types/dataFetch/dataFetch"
import { InputValidatorObj } from "types/form/inputValidation/inputValidation"
import { InputValidationReducerActions } from "types/reducers/inputValidationReducer/inputValidationReducer"
import { ValidationTypes } from "types/validation/validation"
import { INPUT_VALIDATION_REDUCER_NAMES } from "utils/constants/reducers/inputValidationReducerNames/inputValidationReducerNames"
import { VAL_IDLE, VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const useCreateSubmitWithVal = <T extends InputValidatorObj, R>(
    isValid: boolean, fetchStatus: ValidationTypes,
    dispatch: Dispatch<InputValidationReducerActions<T>>,
    sendFc: () => void,
    fetchDataChanger: Dispatch<SetStateAction<DataFetch<R>>>
) => {
    useEffect(() => {
        if (isValid && (fetchStatus === VAL_IDLE || fetchStatus === VAL_ERROR)) {
            sendFc()
        }
        if (isValid && fetchStatus === VAL_ERROR) {
            dispatch({ type: INPUT_VALIDATION_REDUCER_NAMES.setIsValidFalse })
        }
        if (isValid && fetchStatus === VAL_SUCCESS) {
            fetchDataChanger({ fetchStatus: 'idle' })
            dispatch({ type: INPUT_VALIDATION_REDUCER_NAMES.clearAll })
        }
    }, [isValid, fetchStatus, sendFc, dispatch])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({
            type: INPUT_VALIDATION_REDUCER_NAMES.validateAll
        })
    }
    return onSubmit
}