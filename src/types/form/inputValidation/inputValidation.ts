import { ValidationTypes } from "types/validation/validation";
import { VAL_ERROR } from "utils/constants/validationTypes/validationTypes";

export type InputValidatorResult = {
    validationType: Exclude<ValidationTypes, typeof VAL_ERROR>
} | {
    validationType: Extract<ValidationTypes, typeof VAL_ERROR>
    errorMessage: string;
}

export type InputValidator = (value: string) => InputValidatorResult

export type InputValidationState<T extends InputValidatorObj> = {
    [K in keyof T]: InputValidationItem;

} & { isValid: boolean; }
export interface InputValidatorItem {
    validators: InputValidator[];
    defaultValue?: string;
}
export type InputValidatorObj = Record<string, InputValidatorItem>


export type InputValidationItem = {
    value: string;
    validation: InputValidatorResult;
    name: string,
    validator: InputValidator[],
} & InputValidatorObj

export type FormValidationSingleItemContextType = InputValidationItem | null