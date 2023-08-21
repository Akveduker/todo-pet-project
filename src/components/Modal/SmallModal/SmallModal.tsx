import { FC, useRef } from 'react';
import ModalLayout from '../ModalLayout/ModalLayout';
import s from './SmallModal.module.scss'
import { SmallModalProps } from 'types/ui/modal/modal';
import { createPortal } from 'react-dom';
import { useClickOutside } from 'hooks/app/useClickOutside';

const SmallModal: FC<SmallModalProps> = ({ closeModal, isOpen, children, pos }) => {

    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, closeModal)

    return createPortal(
        <ModalLayout
            isOpen={isOpen}
            closeModal={closeModal}
            layoutClass={s['container']}

        >
            <div className={s['body']}
                ref={ref}
                style={{
                    left: `${pos.posX}px`,
                    top: `${pos.posY}px`,
                }}

            >
                {children}
            </div>
        </ModalLayout>,
        document.getElementById('root') as HTMLElement
    );
};

export default SmallModal;