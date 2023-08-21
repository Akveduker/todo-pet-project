import { VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

const regEx = /^#(?:[0-9a-f]{3}){1,2}$/i
export const isValueHexColor = (color: string) => {
    if (regEx.test(color)) return VAL_SUCCESS
    return VAL_ERROR
}