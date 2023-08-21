import WithTitleForInputs from '@components/Providers/WithTitleForInputs/WithTitleForInputs';
import { useCreateInputValidationEvents } from 'hooks/inputValidation/useCreateInputValidationEvents/useCreateInputValidationEvents';
import { FC, TextareaHTMLAttributes } from 'react';
import s from './TextAreaWithValidators.module.scss'
import { WithValidationContext } from 'types/input/baseInput/baseInput';
import BaseTextArea from 'ui/TextArea/BaseTextArea/BaseTextArea';
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';
import { VAL_PROVIDER_START } from 'utils/constants/validationProviderStyleTypes/validationProviderStyleTypes';
import WithValidation from '@components/Providers/WithValidation/WithValidation';

export type TextAreaWithValidatorsProps =
    Pick<WithValidationContext, 'inputTitle' | 'validationItem'>
    & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaWithValidators: FC<TextAreaWithValidatorsProps> = ({ inputTitle, validationItem, ...restProps }) => {

    const { validation, value, name } = validationItem
    const [validateValue, setValue] = useCreateInputValidationEvents(name)

    return (
        <div>
            <WithTitleForInputs
                title={inputTitle}
            >
                <WithValidation
                    validation={validation}
                    validationStyle={VAL_PROVIDER_START}
                >
                    <BaseTextArea
                        onChange={(e) => setValue(e.currentTarget.value)}
                        value={value}
                        onBlur={validateValue}
                        className={s[TypeClassExtender('text-area', validation.validationType)]}
                        {...restProps}
                    />
                </WithValidation>
            </WithTitleForInputs>
        </div>
    );
};

export default TextAreaWithValidators;