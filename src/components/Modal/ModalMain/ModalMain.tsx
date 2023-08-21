import { FC } from 'react';
import { createPortal } from 'react-dom';
import s from './ModalMain.module.scss'
import { ModalProps } from 'types/ui/modal/modal';
import ModalLayout from '../ModalLayout/ModalLayout';
const ModalMain: FC<ModalProps> = ({ closeModal, children, isOpen }) => {
    return createPortal(
        <ModalLayout
            closeModal={closeModal}
            isOpen={isOpen}
            layoutClass={s['container']}
        >
            <div className={s['body']}>
                <button
                    onClick={closeModal}
                    className={s['close']}
                >
                    X
                </button>
                {children}
            </div>

        </ModalLayout>
        ,
        document.getElementById('root') as HTMLElement
    )
};

export default ModalMain;