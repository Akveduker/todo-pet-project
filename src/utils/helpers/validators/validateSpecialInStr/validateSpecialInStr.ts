import { VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

const regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).+$/g
export const validateSpecialInStr = (str: string) => {
    if (regEx.test(str)) return VAL_SUCCESS
    return VAL_ERROR
}