import { FC } from 'react';
import s from './BaseInputWithValidators.module.scss'
import { WithValidationContext } from 'types/input/baseInput/baseInput';
import { useCreateInputValidationEvents } from 'hooks/inputValidation/useCreateInputValidationEvents/useCreateInputValidationEvents';
import BaseInputUi from '../../../ui/inputs/BaseInput/BaseInputUi/BaseInputUi';
import { FormValidationSingleItemContext } from 'context/FormValidationSingleItemContext/FormSingleItemValidationContext';
import WithTitleForInputs from '@components/Providers/WithTitleForInputs/WithTitleForInputs';
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';
import WithValidation from '@components/Providers/WithValidation/WithValidation';

const BaseInputWithValidators: FC<WithValidationContext> = ({ inputTitle, validationItem, ...restProps }) => {

    const { validation, value, name } = validationItem

    const [validateValue, setValue] = useCreateInputValidationEvents(name)

    return (
        <FormValidationSingleItemContext.Provider
            value={validationItem}
        >
            <div>
                <WithTitleForInputs
                    title={inputTitle}
                >
                    <WithValidation validation={validation}>
                        <BaseInputUi
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            className={s[TypeClassExtender('input', validation.validationType)]}
                            onBlur={validateValue}
                            {...restProps}

                        />
                    </WithValidation>
                </WithTitleForInputs>

            </div>
        </FormValidationSingleItemContext.Provider>
    );
};

export default BaseInputWithValidators;