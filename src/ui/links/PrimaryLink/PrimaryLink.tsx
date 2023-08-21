import React, { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { uiComponentsClassCreator } from 'utils/helpers/class/uiComponentsClassCreator/uiComponentsClassCreator';
import s from './PrimaryLink.module.scss'
const PrimaryLink: FC<PropsWithChildren<LinkProps>> = (props) => {
    const { children, className, ...rest } = props
    const modifiedClass = uiComponentsClassCreator(s, 'button', undefined, className)
    return (
        <Link {...rest} className={modifiedClass}>
            {children}
        </Link>
    );
};

export default PrimaryLink;