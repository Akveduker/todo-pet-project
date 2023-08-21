import { emailValidator } from "utils/helpers/validators/emailValidator/emailValidator";
import { isStrDate } from "utils/helpers/validators/isStrDate/isStrDate";
import { lengthValidator } from "utils/helpers/validators/lengthValidator/lengthValidator";
import { validateSpecialInStr } from "utils/helpers/validators/validateSpecialInStr/validateSpecialInStr";
import { withErrorCreator } from "utils/helpers/validators/withErrorCreator/withErrorCreator";

export const inputValidators = {
    password: [
        withErrorCreator('Пароль слишком короткий', lengthValidator(4)),
        withErrorCreator('Пароль должен содержать как минимум 1 символ верхнего регистра,нижнего,число и специальный символ', validateSpecialInStr)
    ],
    email: [
        withErrorCreator('Электронная почта слишком короткая', lengthValidator(4)),
        withErrorCreator('Неверный формат электронной почты', emailValidator)
    ],
    name: [withErrorCreator('Имя слишком короткое', lengthValidator(4))],
    date: [withErrorCreator('Неверный формат даты', isStrDate)]
}