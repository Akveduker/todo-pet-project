import { ValidationTypes } from "types/validation/validation";

export const TypeClassExtender = <T>(className: string, type: T) => {
    return `${className}--${type}`
}