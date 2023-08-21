import { useAppContext } from 'hooks/context/useAppContext';
import TaskGroupItem from '../TaskGroupItem/TaskGroupItem';
import s from './Groups.module.scss'
import WithRightSideModalContext from '@components/Providers/WithRightSideModalContext/WithRightSideModalContext';
import { TaskGroupListContext } from 'context/TaskGroupListContext/TaskGroupListContext';
const Groups = () => {
    const [taskGroups] = useAppContext(TaskGroupListContext)
    if (taskGroups.length === 0) return <h3>В этой группе нет групп задач</h3>
    return (
        <table className={s['container']}>
            <thead>
                <tr className={s['header']}>
                    <td className={`${s['block']}`}>
                        Название
                    </td>
                    <td className={`${s['block']}`}>
                        Люди
                    </td>
                    <td className={`${s['block']}`}>
                        Дата
                    </td>
                </tr>
            </thead>
            <tbody>
                <WithRightSideModalContext>
                    {taskGroups.map(item => {
                        return (
                            <TaskGroupItem
                                key={item._id}
                                {...item}
                            />
                        )
                    })}
                </WithRightSideModalContext>
            </tbody>
        </table>
    );
};

export default Groups;