import { FC } from 'react';
import s from './PrimaryButtonWithValCtx.module.scss'
import { PrimaryButtonProps } from 'types/ui/primaryButton/primaryButton';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useAppContext } from 'hooks/context/useAppContext';
import { VAL_ERROR, VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import OkIcon from 'ui/icons/OkIcon/OkIcon';
import ErrorIcon from 'ui/icons/ErrorIcon/ErrorIcon';
import { FormValidationSingleItemContext } from 'context/FormValidationSingleItemContext/FormSingleItemValidationContext';
const PrimaryButtonWithValCtx: FC<PrimaryButtonProps> = ({ children, ...rest }) => {

    const { validation } = useAppContext(FormValidationSingleItemContext)
    return (
        <div className={s['container']}>
            <PrimaryButton {...rest}>
                {children}
            </PrimaryButton>
            <div className={s['icon']}>
                {validation.validationType === VAL_SUCCESS && <OkIcon />}
                {validation.validationType === VAL_ERROR && <ErrorIcon />}
            </div>
        </div>
    );
};

export default PrimaryButtonWithValCtx;