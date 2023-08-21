import { useAppContext } from 'hooks/context/useAppContext';
import { TaskContext } from 'context/TaskContext/TaskContext';
import s from './TaskBody.module.scss'
import DateIcon from 'ui/icons/DateIcon/DateIcon';
import { dateInToString } from 'utils/helpers/converters/dateInToString/dateInToString';
import PersonsIcon from 'ui/icons/PersonsIcon/PersonsIcon';
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';
import { motion } from 'framer-motion'
import { useRef, useState } from 'react';
import TaskSettings from '../TaskSettings/TaskSettings';
import { TaskSettingsContext } from 'context/TaskSettingsContext/TaskSettingsContext';
import ChangeTaskStatus from '../ChangeTaskStatus/ChangeTaskStatus';
const TaskBody = () => {
    const { name, taskDate, persons, taskStatus } = useAppContext(TaskContext)
    const { settingsState } = useAppContext(TaskSettingsContext)
    const [isOpen, closeSettings, openSettings] = settingsState
    return (
        <motion.div
            className={`${s['wrapper']} ${s[TypeClassExtender('wrapper', taskStatus)]}`}
            onMouseOver={openSettings}
            onMouseOut={() => closeSettings()}
            animate={{
                borderTopRightRadius: isOpen ? 0 : '12px'
            }}
            transition={{
                duration: isOpen ? 0.08 : 0.06,
            }}
        >
            <TaskSettings />

            <motion.div
                className={s['body']}
                animate={{
                    borderTopRightRadius: isOpen ? 0 : '12px'
                }}
                transition={{ duration: isOpen ? 0.08 : 0.06 }}
            >
                <p className={s['name']}>
                    {name}
                </p>
                <div className={s['info']}>
                    <p className={s['item']}>
                        <span className={s['item__icon']}>
                            <DateIcon type='small' />
                        </span>
                        {dateInToString(taskDate)}
                    </p>

                    <p className={s['item']}>
                        <span className={s['item__icon']}>
                            <PersonsIcon type='small' />
                        </span>
                        {persons.map(item => item.name).join(', ')}
                    </p>

                    <div className={s['status']}
                    >
                        <ChangeTaskStatus />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TaskBody;