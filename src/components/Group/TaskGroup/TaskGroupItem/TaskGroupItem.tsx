import { FC, useState } from 'react';
import s from './TaskGroupItem.module.scss'
import { TaskGroup } from 'types/task/task';
import { GroupContext } from 'context/GroupContext/GroupContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { filterUsersInGroup } from 'utils/helpers/converters/filterUsersInGroup/filterUsersInGroup';
import PersonItem from '../PersonItem/PersonItem';
import { TaskGroupContext } from 'context/TaskGroupContext/TaskGroupContext';
import { useSetRightModalState } from 'hooks/modal/useSetRightModalState';
import TaskGroupModal from '../TaskGroupModal/TaskGroupModal/TaskGroupModal';
import { dateInToString } from 'utils/helpers/converters/dateInToString/dateInToString';
import { GroupUser } from 'types/groups/groups';
import { TaskGroupContextItem } from 'types/context/taskGroupContext/taskGroupContext';

const TaskGroupItem: FC<TaskGroup> = (props) => {
    const { name, color, personsId, dates, _id } = props
    const [isOpen, closeModal, openModal] = useSetRightModalState(_id)
    const [{ usersArray }] = useAppContext(GroupContext)
    const usersInThisGroup = filterUsersInGroup(usersArray, personsId)

    const taskGroupContextState = useState<TaskGroupContextItem>({ ...props, persons: usersInThisGroup })

    return (
        <tr
            className={`${s['group']}`}
            onClick={openModal}
        >

            <td className={s['group__item']}>
                <div className={s['fake-div']}></div>
                <h6 className={`${s['title']} `}>
                    {name}
                    <div
                        className={s['color-block']}
                        style={{
                            backgroundColor: color
                        }}
                    ></div>
                </h6>
            </td>
            <td className={s['group__item']}>
                <div className={s['people']}>
                    {usersInThisGroup.map(({ name, _id, userColor }) => {
                        return (
                            <div className={s['people__item']} key={_id}>
                                <PersonItem
                                    name={name}
                                    colors={userColor}
                                />
                            </div>
                        )
                    })}
                </div>
            </td>
            <td className={s['group__item']}>
                <div>
                    {dateInToString(dates)}
                </div>
            </td>
            <TaskGroupContext.Provider
                value={taskGroupContextState}
            >
                <TaskGroupModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                />
            </TaskGroupContext.Provider>
        </tr>
    );
};

export default TaskGroupItem;