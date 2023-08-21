import { inputValidators } from "../validators/validators";

export const valObjectCreateGroup = {
    name: {
        validators: inputValidators.name,
    },
    password: {
        validators: inputValidators.password,
    },
}