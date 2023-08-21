import { FC, useRef } from 'react';
import s from './RightSideModal.module.scss'
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import { ModalProps } from 'types/ui/modal/modal';


const RightSideModal: FC<ModalProps> = ({ isOpen, children }) => {

    const nodeRef = useRef<HTMLDivElement>(null);
    const modalRoot = document.getElementById('modal') as HTMLElement

    return createPortal(
        <CSSTransition
            nodeRef={nodeRef}
            in={isOpen}
            timeout={200}
            mountOnEnter
            unmountOnExit
            classNames={{
                enterActive: s['body-enter-acitve'],
                enterDone: s['body-enter-done'],
                exitActive: s['body-exit-active'],
                exitDone: s['body-exit-done'],
            }}

        >
            <div className={s['body']}
                ref={nodeRef}
            >
                {children}
            </div>
        </CSSTransition>,
        modalRoot
    );
};

export default RightSideModal;