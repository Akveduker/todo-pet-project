import { PropsWithChildren, createContext } from "react";
import { InputContext } from "types/context/inputContext/inputContext";
import { InputValidatorObj } from "types/form/inputValidation/inputValidation";
export const ValidationContext = createContext<InputContext<InputValidatorObj>>(null)

const WithValidationContext = <T extends InputValidatorObj>(props: PropsWithChildren<InputContext<T>>) => {
    const { children, state, dispatch } = props
    return (
        <ValidationContext.Provider value={{ state, dispatch }}>
            {children}
        </ValidationContext.Provider>
    );
};

export default WithValidationContext;