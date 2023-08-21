import { ValidationContext } from "context/InputValidationContext/InputValidationContext"
import { useAppContext } from "hooks/context/useAppContext"
import { INPUT_VALIDATION_REDUCER_NAMES } from "utils/constants/reducers/inputValidationReducerNames/inputValidationReducerNames"

export const useCreateInputValidationEvents = (name: string) => {
    const { dispatch } = useAppContext(ValidationContext)
    const setFc = (value: string) => {
        dispatch({
            type: INPUT_VALIDATION_REDUCER_NAMES.setValue, payload: {
                name,
                value
            }
        })
    }

    const onBlur = () => {
        dispatch({
            type: INPUT_VALIDATION_REDUCER_NAMES.validateSingle,
            payload: {
                name
            }
        })
    }

    return [onBlur, setFc] as const
}