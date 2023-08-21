import ModalSecondary from '@components/Modal/ModalSecondary/ModalSecondary';
import { useSetModalState } from 'hooks/modal/useSetModalState';
import { useDeleteTask } from 'hooks/task/useDeleteTask';
import React, { useEffect } from 'react';
import s from './DeleteTask.module.scss'
import SecondaryButton from 'ui/buttons/SecondaryButton/SecondaryButton';
import SmallTaskButton from 'ui/buttons/SmallTaskButton/SmallTaskButton';
import TrashBinIcon from 'ui/icons/TrashBinIcon/TrashBinIcon';
import { STYLE_BUTTON_RED } from 'utils/constants/buttonTypeNames/secondaryButton/secondaryButtonNames';
import { VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import { useAppContext } from 'hooks/context/useAppContext';
import { TaskSettingsContext } from 'context/TaskSettingsContext/TaskSettingsContext';

const DeleteTask = () => {
    const { settingsModal, childrenRef } = useAppContext(TaskSettingsContext)
    const [isOpen, closeModal, openModal] = settingsModal
    const [data, deleteTask] = useDeleteTask()
    const { fetchStatus } = data
    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            closeModal()
        }
    }, [fetchStatus])
    return (
        <>

            <ModalSecondary
                isOpen={isOpen}
                closeModal={closeModal}
                containerRef={childrenRef}
            >

                <p>
                    Вы действительно хотите удалить эту задачу?
                </p>
                <div className={s['button']}>
                    <SecondaryButton
                        styleType={STYLE_BUTTON_RED}
                        onClick={deleteTask}
                    >
                        Удалить
                    </SecondaryButton>
                </div>
                <SecondaryButton
                    onClick={closeModal}

                >
                    Отменить
                </SecondaryButton>
            </ModalSecondary >
            <SmallTaskButton
                onClick={openModal}
            >
                <TrashBinIcon
                    type='small'
                />
                Удалить
            </SmallTaskButton>
        </>
    );
};

export default DeleteTask;