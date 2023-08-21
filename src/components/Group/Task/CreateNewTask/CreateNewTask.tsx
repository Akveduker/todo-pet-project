import ModalFormWrapper from '@components/Modal/ModalFormWrapper/ModalFormWrapper';
import { useSetModalState } from 'hooks/modal/useSetModalState';
import s from './CreateNewTask.module.scss'
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';
import { VAL_ERROR, VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import AddUserToGroup from '@components/Group/TaskGroup/AddUserToGroup/AddUserToGroup';
import { UsersListContext } from 'context/UsersListContext/UsersListContext';
import DatePickerWithTitle from '@components/Ui/DatePickerWithTitle/DatePickerWithTitle';
import { useEffect } from 'react';
import { useCreateNewTask } from 'hooks/task/useCreateNewTask';
import TextAreaWithValidators from '@components/Ui/TextAreaWithValidators/TextAreaWithValidators';

const CreateNewTask = () => {
    const {
        fetchData,
        validationState,
        usersListState,
        createTask,
        setDataFetchState
    } = useCreateNewTask()

    const [isOpen, closeModal, openModal] = useSetModalState()

    const { date, name } = validationState[0]

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
                sendReq={createTask}
                setDataFetchState={setDataFetchState}
            >
                <div className={s['wrapper']}>
                    <h2 className={s['title']}>Создать новую задачу</h2>
                    <div className={s['item']}>
                        <TextAreaWithValidators
                            validationItem={name}
                            inputTitle={'Название задачи'}
                        />
                    </div>
                    <div className={s['item']}>
                        <DatePickerWithTitle
                            validationItem={date}
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
            <button
                className={s['create-task']}
                onClick={openModal}
            >
                Добавить задачу
            </button>
        </>
    );
};

export default CreateNewTask;