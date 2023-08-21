import { InputValidationItem } from "types/form/inputValidation/inputValidation";
import { checkAllValidators } from "utils/helpers/validators/checkAllValidators/checkAllValidators";

export const validateSingle = (item: InputValidationItem) => {
    return {
        ...item,
        validation: checkAllValidators(item)
    }
}