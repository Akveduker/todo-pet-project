import { useSetModalState } from 'hooks/modal/useSetModalState';
import s from './CreateGroup.module.scss'
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import BaseInputPassword from '@components/Ui/BaseInputPassword/BaseInputPassword';
import BaseInputWithValidators from '@components/Ui/BaseInputWithValidators/BaseInputWithValidators';
import { VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import { useEffect } from 'react';
import ModalFormWrapper from '@components/Modal/ModalFormWrapper/ModalFormWrapper';
import { useCreateGroup } from 'hooks/group/useCreateGroup';

const CreateGroup = () => {

    const [isOpen, closeModal, openModal] = useSetModalState()

    const {
        validationState,
        fetchData,
        createGroup,
        setDataFetchState
    } = useCreateGroup()

    const { name, password } = validationState[0]

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
                                validationItem={name}
                                inputTitle={'Название группы'}
                            />

                        </div>
                        <div className={s['item']}>
                            <BaseInputPassword
                                validationItem={password}
                                inputTitle={'Пароль группы'}
                            />
                        </div>
                        <PrimaryButton>
                            Создать
                        </PrimaryButton>
                    </div>
                </div>
            </ModalFormWrapper>
            <PrimaryButton type='button' styleType='small' onClick={openModal}>
                +
            </PrimaryButton>
        </>
    );
};

export default CreateGroup;

