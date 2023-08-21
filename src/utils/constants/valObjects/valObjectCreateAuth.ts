import { inputValidators } from "../validators/validators";

export const valObjectCreateAuth = {
    email: {
        validators: inputValidators.email
    },
    password: {
        validators: inputValidators.password
    }
}