import CloseTaskGroupIcon from 'ui/icons/CloseTaskGroupIcon/CloseTaskGroupIcon';
import s from './TaskGroupModalTop.module.scss'
import TrashBinIcon from 'ui/icons/TrashBinIcon/TrashBinIcon';
import { useAppContext } from 'hooks/context/useAppContext';
import { RightSideModalContext } from 'context/RightSideModalContext/RightSideModalContext';
import { useDeleteTaskGroup } from 'hooks/taskGroup/useDeleteTaskGroup';
import { TaskGroupContext } from 'context/TaskGroupContext/TaskGroupContext';
import CircleForName from '@components/Ui/CircleForName/CircleForName';
import WithForGroupAdmin from '@components/Providers/WithForGroupAdmin/WithForGroupAdmin';

const TaskGroupModalTop = () => {
    const [{ closeFc }] = useAppContext(RightSideModalContext)
    const [{ _id, persons }] = useAppContext(TaskGroupContext)
    const [data, removeGroup] = useDeleteTaskGroup(_id)
    return (

        <div className={s['container']}>
            <button onClick={closeFc}>
                <CloseTaskGroupIcon />
            </button>
            <div className={s['container__right']}>
                <div className={s['users']}>
                    {persons.map(({ userColor, _id, name }, index) => {
                        return (
                            <div className={s['user']}
                                key={_id}
                                style={{
                                    transform: `translateX(-${index * 5}px)`,
                                    zIndex: `${persons.length - index}`
                                }}
                            >
                                <CircleForName
                                    char={name.charAt(0).toLocaleUpperCase()}
                                    colors={userColor}
                                />
                            </div>
                        )
                    })}
                </div>
                <WithForGroupAdmin>
                    <button onClick={removeGroup}>
                        <TrashBinIcon />
                    </button>
                </WithForGroupAdmin>
            </div>
        </div>
    );
};

export default TaskGroupModalTop;