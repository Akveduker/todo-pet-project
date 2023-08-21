import { isValueHexColor } from "utils/helpers/validators/isValueHexColor/isValueHexColor";
import { lengthValidator } from "utils/helpers/validators/lengthValidator/lengthValidator";
import { withErrorCreator } from "utils/helpers/validators/withErrorCreator/withErrorCreator";
import { inputValidators } from "../validators/validators";

export const valObjectCreateNewTaskGroup = {
    name: {
        validators: [withErrorCreator('Название слишком короткое', lengthValidator(4))],
    },
    color: {
        validators: [withErrorCreator('Неверный формат цвета', isValueHexColor)],
    },
    date: {
        validators: inputValidators.date
    }
}
