import { InputValidationState, InputValidatorItem, InputValidatorObj, InputValidatorResult } from "types/form/inputValidation/inputValidation";
import { VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes";
import { checkAllValidators } from "utils/helpers/validators/checkAllValidators/checkAllValidators";
export const validateAll = <T extends InputValidatorObj>(state: InputValidationState<T>): InputValidationState<T> => {
    let isValid = true;
    let key: keyof typeof state
    for (key in state) {

        const obj = state[key]
        if (key === 'isValid') continue
        if (obj.validation.validationType === VAL_SUCCESS) continue
        if (obj.validation.validationType === VAL_ERROR) {
            if (isValid) isValid = false
        }

        let valResult = checkAllValidators(obj)

        if (isValid && valResult.validationType === VAL_ERROR) isValid = false
        state = {
            ...state,
            [key]: {
                ...obj,
                validation: valResult
            }
        }
    }
    return { ...state, isValid }
}