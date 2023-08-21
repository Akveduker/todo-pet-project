import { inputValidators } from "../validators/validators";

export const valObjectReg = {
    name: {
        validators: inputValidators.name
    },
    email: {
        validators: inputValidators.email,
    },
    password: {
        validators: inputValidators.password
    }
}