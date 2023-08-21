import React, { FC, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import s from './ModalSecondary.module.scss'
import { ModalProps } from 'types/ui/modal/modal';
import ModalLayout from '../ModalLayout/ModalLayout';

const ModalSecondary = forwardRef<HTMLDivElement, ModalProps>(({ children, ...rest }, ref) => {


    return createPortal(
        <ModalLayout
            layoutClass={s['container']}
            stopScroll
            {...rest}
        >
            <div
                ref={ref}
                className={s['body']}
            >
                {children}
            </div>
        </ModalLayout>,
        document.getElementById('modal') as HTMLElement
    );
})

export default ModalSecondary;