import { FC } from 'react';
import s from './WithValidation.module.scss'
import { VAL_ERROR, VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import OkIcon from 'ui/icons/OkIcon/OkIcon';
import ErrorIcon from 'ui/icons/ErrorIcon/ErrorIcon';
import { WithValidationProps } from 'types/input/baseInput/baseInput';

const WithValidation: FC<WithValidationProps> = ({ children, validation, validationStyle }) => {
    const { validationType } = validation
    return (
        <label className={s['container']}>
            <div className={s['input']}>
                {children}
                {validationType === VAL_SUCCESS && <div className={`${s['icon']} ${s[`icon--${validationStyle ?? 'mid'}`]}`}><OkIcon /></div>}
                {validationType === VAL_ERROR && <div className={`${s['icon']} ${s[`icon--${validationStyle ?? 'mid'}`]}`}><ErrorIcon /></div>}
            </div>
            {validationType === VAL_ERROR && <p className={s['error']}>{validation.errorMessage}</p>}
        </label>
    );
};

export default WithValidation;