import { TaskContext } from 'context/TaskContext/TaskContext';
import { useAppContext } from 'hooks/context/useAppContext';
import s from './TaskStatus.module.scss'
import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_NOT_STARTED } from 'utils/constants/taskStatuses/taskStatuses';
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';
import { TaskStatus } from 'types/task/task';
import { FC } from 'react';
interface TaskStatusProps {
    status?: TaskStatus
}
const TaskStatusItem: FC<TaskStatusProps> = ({ status }) => {
    const { taskStatus } = useAppContext(TaskContext)
    const currentStatus = status ?? taskStatus
    const className = `${s['status']} ${s[TypeClassExtender('status', currentStatus)]}`
    return (

        <div className={className}>
            {currentStatus === TASK_STATUS_DONE && 'Готово'}
            {currentStatus === TASK_STATUS_IN_PROGRESS && 'Выполняется'}
            {currentStatus === TASK_STATUS_NOT_STARTED && 'Не начата'}
        </div>
    );
};

export default TaskStatusItem;