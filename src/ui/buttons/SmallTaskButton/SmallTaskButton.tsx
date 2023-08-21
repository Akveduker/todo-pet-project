import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import s from './SmallTaskButton.module.scss'
import { baseClassWithAdded } from 'utils/helpers/class/baseClassWithAdded/baseClassWithAdded';
type SmallTaskButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

const SmallTaskButton: FC<SmallTaskButtonProps> = (props) => {
    const { className, children, ...rest } = props
    return (
        <button
            className={baseClassWithAdded(s['button'], className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export default SmallTaskButton;