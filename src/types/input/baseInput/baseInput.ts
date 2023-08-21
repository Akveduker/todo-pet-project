import { PropsWithChildren } from "react";
import { InputValidationItem, InputValidatorResult } from "../../form/inputValidation/inputValidation";
import { VAL_PROVIDER_MID, VAL_PROVIDER_START } from "utils/constants/validationProviderStyleTypes/validationProviderStyleTypes";

export type WithValidationProps = PropsWithChildren<{
    validation: InputValidatorResult;
    validationStyle?: typeof VAL_PROVIDER_MID | typeof VAL_PROVIDER_START;
}>

export type WithValidationContext = {
    inputTitle: string;
    validationItem: InputValidationItem;
} & React.InputHTMLAttributes<HTMLInputElement>

export type WithValidationContextPassword = WithValidationContext & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>


export type InfoInputUiProps = {
    inputTitle: string;
}