import TaskBody from '@components/Group/Task/TaskBody/TaskBody';
import WithLoader from '@components/Providers/WithLoader/WithLoader';
import { TaskContext } from 'context/TaskContext/TaskContext';
import { TaskListContext } from 'context/TaskListContext/TaskListContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { VAL_LOADING } from 'utils/constants/validationTypes/validationTypes';
import CreateNewTask from '@components/Group/Task/CreateNewTask/CreateNewTask';
import { TaskGroupContext } from 'context/TaskGroupContext/TaskGroupContext';
import s from './TaskList.module.scss'
import Scrollbars from 'react-custom-scrollbars-2';
import WithTaskSettingsContext from '@components/Providers/WithTaskSettingsContext/WithTaskSettingsContext';
import WithForAdminAndTaskGroupUsers from '@components/Providers/WithForAdminAndTaskGroupUsers/WithForAdminAndTaskGroupUsers';

const TaskList = () => {
    const { state } = useAppContext(TaskListContext)
    const { items, status } = state
    const [{ persons }] = useAppContext(TaskGroupContext)
    return (
        <WithLoader
            condition={status.fetchStatus === VAL_LOADING}
        >
            <div className={`${s['container']} ${items.length >= 4 ? s['container--active'] : ''}`}>
                <Scrollbars
                    style={{
                        height: 609,
                    }}
                    autoHide

                >
                    {items.map(item => {
                        return (
                            <div
                                key={item._id}
                                className={`${s['item']} ${items.length >= 4 ? s['item--small'] : ''}`}
                            >

                                <TaskContext.Provider
                                    value={{
                                        ...item,
                                        persons: persons.filter(({ _id }) => item.personsId.includes(_id))
                                    }}
                                >
                                    <WithTaskSettingsContext>
                                        <TaskBody />
                                    </WithTaskSettingsContext>
                                </TaskContext.Provider>

                            </div>
                        )
                    })}
                    {items.length < 4 &&
                        <WithForAdminAndTaskGroupUsers>
                            <div className={s['button']}>
                                <CreateNewTask />
                            </div>
                        </WithForAdminAndTaskGroupUsers>
                    }
                </Scrollbars>
                <WithForAdminAndTaskGroupUsers>
                    {items.length >= 4 &&
                        <div className={s['button']}>
                            <CreateNewTask />
                        </div>
                    }
                </WithForAdminAndTaskGroupUsers>

            </div>
        </WithLoader >
    );
};

export default TaskList;