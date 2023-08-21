import { VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const lengthValidator = (length: number) => {
    return (string: string) => {
        if (string.length >= length) return VAL_SUCCESS
        return VAL_ERROR
    }
}