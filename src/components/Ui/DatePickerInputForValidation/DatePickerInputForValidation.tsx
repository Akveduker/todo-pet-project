import { FormValidationSingleItemContext } from 'context/FormValidationSingleItemContext/FormSingleItemValidationContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { forwardRef } from 'react';
import s from './DatePickerInputForValidation.module.scss'
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';
import baseInputStyles from 'ui/inputs/BaseInput/BaseInputUi/BaseInputUi.module.scss';
import WithValidation from '@components/Providers/WithValidation/WithValidation';
const CustomDatePickerInput = forwardRef<HTMLInputElement>((props, ref) => {

    const { validation } = useAppContext(FormValidationSingleItemContext)

    const className = `${s[TypeClassExtender('input', validation.validationType)]} ${baseInputStyles['input']}`

    return (
        <>
            <WithValidation validation={validation}>
                <input
                    type="text"
                    {...props}
                    className={className}
                    ref={ref}
                />
            </WithValidation>
        </>
    )
})

export default CustomDatePickerInput;
