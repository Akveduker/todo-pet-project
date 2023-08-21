import WithLoader from '@components/Providers/WithLoader/WithLoader';
import WithValidationContext from 'context/InputValidationContext/InputValidationContext';
import { Dispatch, FC, SetStateAction } from 'react';
import s from './ModalFormWrapper.module.scss'
import { VAL_LOADING } from 'utils/constants/validationTypes/validationTypes';
import ModalMain from '../ModalMain/ModalMain';
import { ModalProps } from 'types/ui/modal/modal';
import { ValidationTypes } from 'types/validation/validation';
import { useCreateValidationState } from 'hooks/inputValidation/useCreateValidationState/useCreateValidationState';
import { useCreateSubmitWithVal } from 'hooks/authorization/useCreateSubmitWithVal';
import { DataFetch } from 'types/dataFetch/dataFetch';
import { InputValidatorObj } from 'types/form/inputValidation/inputValidation';
type ModalFormWrapperProps<T extends InputValidatorObj> = {
    fetchStatus: ValidationTypes;
    validationStateRt: ReturnType<typeof useCreateValidationState<T>>;
    sendReq: () => void;
    setDataFetchState: Dispatch<SetStateAction<DataFetch<any>>>
} & ModalProps

const ModalFormWrapper = <T extends InputValidatorObj>(
    { closeModal,
        isOpen,
        fetchStatus,
        validationStateRt,
        sendReq,
        setDataFetchState,
        children }: ModalFormWrapperProps<T>) => {

    const [validationState, dispatch] = validationStateRt
    const onSubmit = useCreateSubmitWithVal(
        validationState.isValid,
        fetchStatus,
        dispatch,
        sendReq,
        setDataFetchState
    )
    return (
        <ModalMain
            closeModal={closeModal}
            isOpen={isOpen}
        >
            <WithValidationContext
                state={validationState}
                dispatch={dispatch}
            >
                <div className={s['block']} >
                    <WithLoader
                        condition={fetchStatus === VAL_LOADING}
                    >
                        <form onSubmit={onSubmit} className={s['block']}>
                            {children}
                        </form>
                    </WithLoader>
                </div>
            </WithValidationContext>
        </ModalMain>

    );
};

export default ModalFormWrapper;