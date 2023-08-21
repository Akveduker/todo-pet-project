import TaskStatus from '../TaskStatus/TaskStatus';
import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_NOT_STARTED } from 'utils/constants/taskStatuses/taskStatuses';
import s from './ChangeTaskStatus.module.scss'
import { useChangeTaskStatus } from 'hooks/task/useChangeTaskStatus';
import { TaskContext } from 'context/TaskContext/TaskContext';
import { useAppContext } from 'hooks/context/useAppContext';
import CheckIcon from 'ui/icons/CheckIcon/CheckIcon';
import SmallModal from '@components/Modal/SmallModal/SmallModal';
import TaskStatusItem from '../TaskStatus/TaskStatus';
import { useSetSmallModalState } from 'hooks/modal/useSetSmallModalState';
import { useEffect } from 'react';
import { VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import { useSetTaskChangeStatusModal } from 'hooks/task/useSetTaskChangeStatusModal';
import { TaskSettingsContext } from 'context/TaskSettingsContext/TaskSettingsContext';

const ChangeTaskStatus = () => {
    const { taskStatus } = useAppContext(TaskContext)
    const { settingsState } = useAppContext(TaskSettingsContext)
    const [data, editTask] = useChangeTaskStatus()
    const { fetchStatus } = data
    const [isOpen, closeModal, openModal, pos, parentRef] = useSetTaskChangeStatusModal<HTMLButtonElement>()
    useEffect(() => {
        if (fetchStatus === VAL_SUCCESS) {
            closeModal()
        }
    }, [fetchStatus])
    return (
        <div className={s['wrapper']}>
            <SmallModal
                isOpen={isOpen}
                pos={pos}
                closeModal={closeModal}
            >
                <div className={s['container']}>
                    <button
                        onClick={() => editTask(TASK_STATUS_DONE)}
                        className={s['button']}
                    >
                        <TaskStatus
                            status={TASK_STATUS_DONE}
                        />
                        {taskStatus === TASK_STATUS_DONE && <span className={s['icon']}><CheckIcon /></span>}
                    </button>
                    <button
                        onClick={() => editTask(TASK_STATUS_IN_PROGRESS)}
                        className={s['button']}
                    >
                        <TaskStatus
                            status={TASK_STATUS_IN_PROGRESS}
                        />
                        {taskStatus === TASK_STATUS_IN_PROGRESS && <span className={s['icon']}><CheckIcon /></span>}
                    </button>
                    <button
                        onClick={() => editTask(TASK_STATUS_NOT_STARTED)}
                        className={s['button']}
                    >
                        <TaskStatus
                            status={TASK_STATUS_NOT_STARTED}
                        />
                        {taskStatus === TASK_STATUS_NOT_STARTED && <span className={s['icon']}><CheckIcon /></span>}
                    </button>
                </div>
            </SmallModal>
            <button
                className={s['button-open']}
                onClick={openModal(5, -3.5)}
                ref={parentRef}
            >
                <TaskStatusItem />
            </button>
        </div>
    );
};

export default ChangeTaskStatus;