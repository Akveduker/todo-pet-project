import { RefObject, useEffect, useRef } from 'react';
import s from './TaskSettings.module.scss'
import SettingsBgVector from 'ui/icons/SettingsBgVector/SettingsBgVector';
import { CSSTransition } from 'react-transition-group';
import { TaskContext } from 'context/TaskContext/TaskContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { TypeClassExtender } from 'utils/helpers/class/styleClassExtender/TypeClassExtender';
import SmallModal from '@components/Modal/SmallModal/SmallModal';
import DeleteTask from '../DeleteTask/DeleteTask';
import { TaskSettingsContext } from 'context/TaskSettingsContext/TaskSettingsContext';

const TaskSettings = () => {
    const nodeRef = useRef(null);
    const { taskStatus } = useAppContext(TaskContext)
    const { settingsControls, settingsState } = useAppContext(TaskSettingsContext)
    const [isOpen, _c, openSettings] = settingsState
    const [isModalOpen, closeModal, openModal, pos, parentRef] = settingsControls

    useEffect(() => {
        if (!isOpen) {
            closeModal()
        }
    }, [isOpen])
    return (
        <>
            <CSSTransition
                in={isOpen}
                nodeRef={nodeRef}
                timeout={600}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enterActive: s['container-enter-active'],
                    enterDone: s['container-enter-done'],
                }}
            >
                <div
                    ref={parentRef as RefObject<HTMLDivElement>}
                >
                    <button
                        onClick={(e) => {
                            const callback = openModal(-e.currentTarget.offsetWidth - 52.5, 0)
                            callback(e)
                        }}
                        ref={nodeRef}
                        className={`${s['container']}`}
                    >
                        <div className={s['point']}></div>
                        <div className={s['point']}></div>
                        <div className={s['point']}></div>
                        <div className={`${s['bg']} ${s[TypeClassExtender('bg', taskStatus)]}`}>
                            <SettingsBgVector />
                        </div>
                    </button>
                </div>
            </CSSTransition>
            <SmallModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                pos={pos}
            >
                <div className={s['modal']}>
                    <DeleteTask />
                </div>
            </SmallModal>
        </>
    );
};

export default TaskSettings;