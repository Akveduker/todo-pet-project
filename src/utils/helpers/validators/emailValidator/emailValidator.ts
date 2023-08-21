import { VAL_ERROR, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes";

export const emailValidator = (email: string) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = email.toLowerCase().trimEnd().trimStart().match(regEx)
    if (result) return VAL_SUCCESS
    else return VAL_ERROR
}