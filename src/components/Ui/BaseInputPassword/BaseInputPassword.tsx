import { FC, useState } from 'react';
import s from './BaseInputPassword.module.scss'
import { WithValidationContextPassword } from 'types/input/baseInput/baseInput';
import { useCreateInputValidationEvents } from 'hooks/inputValidation/useCreateInputValidationEvents/useCreateInputValidationEvents';
import BaseInputUi from '../../../ui/inputs/BaseInput/BaseInputUi/BaseInputUi';
import EyeIcon from 'ui/icons/EyeIcon/EyeIcon';
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';
import { VAL_IDLE } from 'utils/constants/validationTypes/validationTypes';
import WithTitleForInputs from '@components/Providers/WithTitleForInputs/WithTitleForInputs';
import WithValidation from '@components/Providers/WithValidation/WithValidation';

const BaseInputPassword: FC<WithValidationContextPassword> = (props) => {
    const { inputTitle, validationItem, type, ...restProps } = props

    const { name, validation, value } = validationItem

    const [validateValue, setValue] = useCreateInputValidationEvents(name)

    const [inputType, setInputType] = useState('password')

    const onClick = () => {
        setInputType(inputType === 'text' ? 'password' : 'text')
    }

    const className = `${validation.validationType !== VAL_IDLE ? s['input__paddings'] : ''}
     ${s[TypeClassExtender('input', validation.validationType)]}`

    return (
        <div>
            <WithTitleForInputs
                title={inputTitle}
            >
                <WithValidation validation={validation}>
                    <div className={s['button-container']}>
                        <BaseInputUi
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            onBlur={validateValue}
                            type={inputType}
                            className={className}
                            {...restProps}

                        />
                        <button
                            type='button'
                            onMouseDown={onClick}
                            className={`${s['show-button']} ${s[TypeClassExtender('show-button', validation.validationType)]}`}>
                            <EyeIcon />
                        </button>
                    </div>
                </WithValidation>

            </WithTitleForInputs>
        </div>
    );
};

export default BaseInputPassword;