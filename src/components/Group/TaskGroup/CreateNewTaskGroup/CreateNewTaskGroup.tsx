import s from './CreateNewTaskGroup.module.scss'
import { useSetModalState } from 'hooks/modal/useSetModalState';
import { useEffect } from 'react';
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import BaseInputWithValidators from '@components/Ui/BaseInputWithValidators/BaseInputWithValidators';
import { idLength } from 'utils/constants/idLength/idLength';
import { VAL_SUCCESS, VAL_ERROR } from 'utils/constants/validationTypes/validationTypes';
import AddUserToGroup from '../AddUserToGroup/AddUserToGroup';
import ChooseColorForGroup from '../ChooseColorForGroup/ChooseColorForGroup';
import { UsersListContext } from 'context/UsersListContext/UsersListContext';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';
import ModalFormWrapper from '@components/Modal/ModalFormWrapper/ModalFormWrapper';
import DatePickerWithTitle from '@components/Ui/DatePickerWithTitle/DatePickerWithTitle';
import { useCreateNewTaskGroup } from 'hooks/taskGroup/useCreateNewTaskGroup';


const CreateNewTaskGroup = () => {
    const [isOpen, closeModal, openModal] = useSetModalState()

    const {
        fetchData,
        validationState,
        setDataFetchState,
        createGroup,
        usersListState
    } = useCreateNewTaskGroup()

    const { name, color, date } = validationState[0]

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
                <div className={s['wrapper']}>
                    <h2 className={s['title']}>Создать новую группу задач</h2>
                    <div className={s['item']}>
                        <BaseInputWithValidators
                            validationItem={name}
                            inputTitle={'Название группы'}
                            maxLength={idLength} />
                    </div>
                    <div className={s['item']}>
                        <DatePickerWithTitle
                            validationItem={date}
                        />
                    </div>
                    <div className={s['item']}>
                        <ChooseColorForGroup
                            validationItem={color}
                        />
                    </div>
                    <div className={s['item']}>
                        <UsersListContext.Provider value={usersListState}>
                            <AddUserToGroup
                            />
                        </UsersListContext.Provider>
                    </div>

                    <PrimaryButton className={s['button']}>
                        Создать
                    </PrimaryButton>
                    {fetchStatus === VAL_ERROR && <ErrorMessage>{fetchData.errorBody}</ErrorMessage>}
                </div>

            </ModalFormWrapper>
            <PrimaryButton onClick={openModal}>
                Создать новую группу задач
            </PrimaryButton>
        </>
    );
};

export default CreateNewTaskGroup;