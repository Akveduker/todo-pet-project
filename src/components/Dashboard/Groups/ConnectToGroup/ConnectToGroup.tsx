import { useSetModalState } from 'hooks/modal/useSetModalState';
import s from '../CreateGroup/CreateGroup.module.scss'
import { useEffect } from 'react';
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import BaseInputPassword from '@components/Ui/BaseInputPassword/BaseInputPassword';
import BaseInputWithValidators from '@components/Ui/BaseInputWithValidators/BaseInputWithValidators';
import { VAL_ERROR, VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import { idLength } from 'utils/constants/idLength/idLength';
import ModalFormWrapper from '@components/Modal/ModalFormWrapper/ModalFormWrapper';
import { useConnectToGroup } from 'hooks/group/useConnectToGroup';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';

const ConnectToGroup = () => {
    const [isOpen, closeModal, openModal] = useSetModalState()

    const {
        fetchData,
        validationState,
        createGroup,
        setDataFetchState
    } = useConnectToGroup()

    const { id, password } = validationState[0]

    const { fetchStatus } = fetchData

    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            closeModal()
        }
    }, [fetchStatus])



    return (

        <>
            <ModalFormWrapper
                isOpen={isOpen}
                closeModal={closeModal}
                fetchStatus={fetchStatus}
                validationStateRt={validationState}
                sendReq={createGroup}
                setDataFetchState={setDataFetchState}
            >
                <div className={s['container']}>
                    <div className={s['wrapper']}>
                        <h3 className={s['title']}>Данные группы</h3>
                        <div className={s['item']}>
                            <BaseInputWithValidators
                                validationItem={id}
                                inputTitle={'Id группы'}
                                maxLength={idLength}
                            />
                        </div>
                        <div className={s['item']}>
                            <BaseInputPassword
                                validationItem={password}
                                inputTitle={'Пароль группы'}
                            />
                        </div>
                        <PrimaryButton>
                            Войти
                        </PrimaryButton>
                        {fetchStatus === VAL_ERROR && <ErrorMessage>{fetchData.errorBody}</ErrorMessage>}
                    </div>

                </div>
            </ModalFormWrapper>
            <PrimaryButton onClick={openModal} className={s['button']}>
                Присоединиться к группе
            </PrimaryButton>
        </>
    );
};

export default ConnectToGroup;