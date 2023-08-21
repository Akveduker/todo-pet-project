import React, { FormEvent, FormEventHandler, useState } from 'react';
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import s from './ChangeTaskGroup.module.scss'
import { useSetModalState } from 'hooks/modal/useSetModalState';
import ModalMain from '@components/Modal/ModalMain/ModalMain';
import ChangeUsersForTaskGroup from '../ChangeUsersForTaskGroup/ChangeUsersForTaskGroup';
import { UsersListContext } from 'context/UsersListContext/UsersListContext';
import { GroupContext } from 'context/GroupContext/GroupContext';
import { TaskGroupContext } from 'context/TaskGroupContext/TaskGroupContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { useCreateUsersListState } from 'hooks/usersList/useCreateUsersListState';
import { GroupContextTypeAdmin } from 'types/context/groupContext/groupContext';
import { useFetchData } from 'hooks/dataFetch/useFetchData';
import { UseStateType } from 'types/state/state';
import { convertUsersListInContextList } from 'utils/helpers/converters/convertUsersListInContextList/convertUsersListInContextList';
const ChangeTaskGroup = () => {
    const [{ persons }] = useAppContext(TaskGroupContext)
    const [{ usersArray }] = useAppContext(GroupContext) as UseStateType<GroupContextTypeAdmin>

    const [isOpen, closeModal, openModal] = useSetModalState()
    const [data, sendReq] = useFetchData()
    const sendData = () => {

    }
    const usersListState = useCreateUsersListState(convertUsersListInContextList(usersArray, persons))

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <>
            <ModalMain
                isOpen={isOpen}
                closeModal={closeModal}
            >
                <form onSubmit={onSubmit}>
                    <UsersListContext.Provider
                        value={usersListState}
                    >
                        <ChangeUsersForTaskGroup />
                    </UsersListContext.Provider>

                    <PrimaryButton>
                        Редактировать
                    </PrimaryButton>
                </form>
            </ModalMain>
            <PrimaryButton
                onClick={openModal}
                className={s['button']}
                type='button'
            >

                Редактировать
            </PrimaryButton>
        </>
    );
};

export default ChangeTaskGroup;