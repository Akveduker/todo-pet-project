import { InputValidationItem, InputValidatorResult } from "types/form/inputValidation/inputValidation";
import { VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes";

export const checkAllValidators = (validationItem: InputValidationItem): InputValidatorResult => {
    const { validator, value, validation } = validationItem
    let validationRes = validation
    validator.every((validatorFc) => {
        const result = validatorFc(value)
        if (result.validationType === VAL_SUCCESS) {
            validationRes = result
            return true
        }
        if (result.validationType === VAL_ERROR) {
            validationRes = result
            return false
        }
    })
    return validationRes
}