import { VAL_IDLE, VAL_ERROR, VAL_LOADING, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes";

export type ValidationTypes = typeof VAL_IDLE | typeof VAL_ERROR | typeof VAL_LOADING | typeof VAL_SUCCESS
export type WithValidationTypes<G> = {
    valTypes: ValidationTypes;
} & G