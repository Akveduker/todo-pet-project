import React, { FC, PropsWithChildren } from 'react';
import s from './WithTitleForInputs.module.scss'
const WithTitleForInputs: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
    return (
        <label>
            <h4 className={s['title']}>{title}</h4>
            {children}
        </label>
    );
};

export default WithTitleForInputs;