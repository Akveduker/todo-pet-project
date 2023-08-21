import { VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const isStrDate = (str: string) => {
    const [firstDate, secondDate] = str.split('-')
    if (!firstDate || !secondDate) return VAL_ERROR
    return VAL_SUCCESS

}