import { InputValidatorResult } from "types/form/inputValidation/inputValidation";
import { ValidationTypes } from "types/validation/validation";
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes";

export const withErrorCreator = (errorMessage: string, fc: (any: any) => ValidationTypes) => {
    return (...args: Parameters<typeof fc>): InputValidatorResult => {
        if (fc(...args) === VAL_SUCCESS) return { validationType: VAL_SUCCESS }
        return {
            validationType: fc(...args),
            errorMessage
        }
    }
}