import { InputValidatorItem, InputValidatorObj } from "types/form/inputValidation/inputValidation";
import { INPUT_VALIDATION_REDUCER_NAMES } from "utils/constants/reducers/inputValidationReducerNames/inputValidationReducerNames"

export type InputValidationReducerActions<T extends InputValidatorObj> = {
    type: typeof INPUT_VALIDATION_REDUCER_NAMES.setValue;
    payload: {
        name: keyof T,
        value: string
    }
} | {
    type: typeof INPUT_VALIDATION_REDUCER_NAMES.validateSingle;
    payload: {
        name: keyof T
    }
} | {
    type: typeof INPUT_VALIDATION_REDUCER_NAMES.validateAll;
} | {
    type: typeof INPUT_VALIDATION_REDUCER_NAMES.setIsValidFalse;
} | {
    type: typeof INPUT_VALIDATION_REDUCER_NAMES.clearAll;
}
