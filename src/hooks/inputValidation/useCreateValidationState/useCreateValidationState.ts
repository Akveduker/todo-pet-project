import _ from "lodash";
import { Reducer, useReducer } from "react";
import { InputValidationState, InputValidatorItem, InputValidatorObj } from "types/form/inputValidation/inputValidation";
import { InputValidationReducerActions } from "types/reducers/inputValidationReducer/inputValidationReducer";
import { inputValidationReducer } from "utils/reducers/inputValidationReducer/inputValidationReducer";


export const useCreateValidationState = <T extends InputValidatorObj>(namesObj: T) => {
    const result = _.reduce(namesObj, (res, value, key) => {
        return {
            ...res,
            [key]: {
                name: key,
                value: value.defaultValue ? value.defaultValue : '',
                validator: value.validators,
                validation: {
                    validationType: 'idle',
                }
            }
        }
    }, { isValid: false } as InputValidationState<T>)

    const [inputState, dispatch] = useReducer<Reducer<InputValidationState<T>, InputValidationReducerActions<T>>>(inputValidationReducer, result)

    return [inputState, dispatch] as const
}