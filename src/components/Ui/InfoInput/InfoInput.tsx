import WithLoader from '@components/Providers/WithLoader/WithLoader';
import { useCreateInfoInputState } from 'hooks/home/useCreatInfoInputState';
import { useCreateInputValidationEvents } from 'hooks/inputValidation/useCreateInputValidationEvents/useCreateInputValidationEvents';
import React, { FC } from 'react';
import s from './InfoInput.module.scss'
import { WithValidationContext } from 'types/input/baseInput/baseInput';
import LinkButton from 'ui/buttons/LinkButton/LinkButton';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';
import InfoInputUi from 'ui/inputs/InfoInput/InfoInput/InfoInputUi';
import { VAL_SUCCESS, VAL_IDLE, VAL_LOADING, VAL_ERROR } from 'utils/constants/validationTypes/validationTypes';
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';

const InfoInput: FC<WithValidationContext> = ({ validationItem, inputTitle, ...props }) => {

    const { value, name, validation } = validationItem

    const [onBlur, setFc] = useCreateInputValidationEvents(name)

    const { disabledState, data, changeButtonState, changeDataState, inputRef } = useCreateInfoInputState(value, name)

    const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFc(e.target.value)
        if (data.fetchStatus === VAL_SUCCESS) changeDataState({ ...data, fetchStatus: VAL_IDLE })
    }

    const className = s[TypeClassExtender('input', validation.validationType)]

    return (
        <WithLoader
            condition={data.fetchStatus === VAL_LOADING}
            loaderType={'small'}
        >
            <div className={s['container']}>
                <h4 className={s['title']}>
                    {inputTitle}
                </h4>
                <LinkButton type='button' onClick={changeButtonState}>
                    {disabledState ? 'Изменить' : 'Сохранить'}
                </LinkButton>
            </div>
            <InfoInputUi
                {...props}
                className={className}
                onBlur={onBlur}
                value={value}
                onChange={setInputValue}
                ref={inputRef}
            />
            {data.fetchStatus === VAL_SUCCESS &&
                <p className={s['success-message']}>
                    Данные изменены
                </p>
            }
            {data.fetchStatus === VAL_ERROR &&
                <ErrorMessage>
                    {data.errorBody}
                </ErrorMessage>
            }
        </WithLoader>
    );
};

export default InfoInput;