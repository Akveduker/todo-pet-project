import RightSideModal from '@components/Modal/RightSideModal/RightSideModal';
import s from './TaskGroupModal.module.scss'
import { FC } from 'react';
import WithTasksListContext from '@components/Providers/WithTasksListContext/WithTasksListContext';
import TaskGroupModalHeader from '../TaskGroupModalHeader/TaskGroupModalHeader/TaskGroupModalHeader';
import { ModalProps } from 'types/ui/modal/modal';
import TaskGroupModalTop from '../TaskGroupModalTop/TaskGroupModalTop';
import TaskList from '@components/Group/Task/TaskList/TaskList';

const TaskGroupModal: FC<ModalProps> = ({ isOpen, closeModal }) => {


    return (

        <RightSideModal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <div className={s['container']}
            >
                <TaskGroupModalTop />
                <WithTasksListContext
                >
                    <div className={s['content']}>
                        <TaskGroupModalHeader />
                        <TaskList />
                    </div>
                </WithTasksListContext>
            </div>
        </RightSideModal>
    );
};

export default TaskGroupModal;