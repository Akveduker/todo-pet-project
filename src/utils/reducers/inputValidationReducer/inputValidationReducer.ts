import { InputValidationState, InputValidatorItem, InputValidatorObj } from "types/form/inputValidation/inputValidation";
import { InputValidationReducerActions } from "types/reducers/inputValidationReducer/inputValidationReducer";
import { INPUT_VALIDATION_REDUCER_NAMES } from "utils/constants/reducers/inputValidationReducerNames/inputValidationReducerNames";
import { clearAllInputsInputValidation } from "utils/helpers/reducer/inputValidationReducer/clearAllInputsInputValidation/clearAllInputsInputValidation";
import { validateAll } from "utils/helpers/reducer/inputValidationReducer/validateAll/validateAll";
import { validateSingle } from "utils/helpers/reducer/inputValidationReducer/validateSingle/validateSingle";

export const inputValidationReducer = <T extends InputValidatorObj>(
    state: InputValidationState<T>,
    action: InputValidationReducerActions<T>): InputValidationState<T> => {
    switch (action.type) {
        case INPUT_VALIDATION_REDUCER_NAMES.setValue:
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name],
                    value: action.payload.value
                }
            }
        case INPUT_VALIDATION_REDUCER_NAMES.validateSingle:
            return {
                ...state,
                [action.payload.name]: validateSingle(state[action.payload.name])
            }
        case INPUT_VALIDATION_REDUCER_NAMES.validateAll:
            return validateAll(state)
        case INPUT_VALIDATION_REDUCER_NAMES.setIsValidFalse:
            return {
                ...state,
                isValid: false,
            }
        case INPUT_VALIDATION_REDUCER_NAMES.clearAll:
            return clearAllInputsInputValidation(state)
        default:
            throw new Error();
    }
}