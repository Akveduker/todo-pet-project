import { lengthValidator } from "utils/helpers/validators/lengthValidator/lengthValidator";
import { withErrorCreator } from "utils/helpers/validators/withErrorCreator/withErrorCreator";
import { inputValidators } from "../validators/validators";

export const valObjectCreateNewTask = {
    name: {
        validators: [withErrorCreator('Название слишком короткое', lengthValidator(4))],
    },
    date: {
        validators: inputValidators.date
    }
}