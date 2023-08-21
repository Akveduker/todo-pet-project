import _ from "lodash";
import { InputValidatorObj, InputValidationState } from "types/form/inputValidation/inputValidation";
import { VAL_IDLE } from "utils/constants/validationTypes/validationTypes";

export const clearAllInputsInputValidation = <T extends InputValidatorObj>(state: InputValidationState<T>): InputValidationState<T> => {
    let key: keyof typeof state
    for (key in state) {

        const obj = state[key]
        if (key === 'isValid') {
            state = {
                ...state,
                [key]: false,
            }
            continue
        }
        state = {
            ...state,
            [key]: {
                ...obj,
                value: '',
                validation: {
                    validationType: VAL_IDLE,
                }
            }
        }

    }
    return { ...state }
}