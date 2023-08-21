import React, { FC, PropsWithChildren } from 'react';
import { uiComponentsClassCreator } from 'utils/helpers/class/uiComponentsClassCreator/uiComponentsClassCreator';
import s from './LinkButton.module.scss'

const LinkButton: FC<PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>> = (props) => {
    const { children, className, ...rest } = props
    const modifiedClass = uiComponentsClassCreator(s, 'button', undefined, className)
    return (
        <button {...rest} className={modifiedClass}>
            {children}
        </button>
    );
};

export default LinkButton;