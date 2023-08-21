import { InputValidationState, InputValidatorObj } from "types/form/inputValidation/inputValidation";
import { InputValidationReducerActions } from "types/reducers/inputValidationReducer/inputValidationReducer";

export type InputContext<T extends InputValidatorObj> = {
    state: InputValidationState<T>,
    dispatch: React.Dispatch<InputValidationReducerActions<T>>
} | null;  