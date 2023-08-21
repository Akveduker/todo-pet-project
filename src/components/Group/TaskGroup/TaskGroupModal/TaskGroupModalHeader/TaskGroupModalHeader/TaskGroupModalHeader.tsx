import CircleForName from '@components/Ui/CircleForName/CircleForName';
import s from './TaskGroupModalHeader.module.scss'
import { TaskGroupContext } from 'context/TaskGroupContext/TaskGroupContext';
import { useAppContext } from 'hooks/context/useAppContext';
import DateIcon from 'ui/icons/DateIcon/DateIcon';
import PersonsIcon from 'ui/icons/PersonsIcon/PersonsIcon';
import { dateInToString } from 'utils/helpers/converters/dateInToString/dateInToString';

const TaskGroupModalHeader = () => {
    const [{ name, persons, dates }] = useAppContext(TaskGroupContext)
    return (
        <div className={s['container']}>

            <h1 className={s['title']}>{name}</h1>

            <ul className={s['list']}>
                <li className={s['list__item']}>
                    <div className={s['list__item']}>
                        <div className={s['item__name']}>
                            <DateIcon />
                            <p>Дата</p>
                        </div>
                        <div className={s['item__content']}>
                            {dateInToString(dates)}
                        </div>
                    </div>
                </li>
                <li className={s['list__item']}>
                    <div className={s['item__name']}>
                        <PersonsIcon />
                        <p>Люди</p>
                    </div>
                    <div className={s['item__content']}>
                        {persons.map(({ name, _id, userColor }) => {
                            return (
                                <p
                                    className={s['user']}
                                    key={_id}
                                >
                                    <CircleForName
                                        char={name.charAt(0).toLocaleUpperCase()}
                                        colors={userColor}
                                    />
                                    <span className={s['user__name']}>
                                        {name}
                                    </span>
                                </p>
                            )
                        })}
                    </div>
                </li>
            </ul>

        </div>
    );
};

export default TaskGroupModalHeader;