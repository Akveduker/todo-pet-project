import React, { FC, PropsWithChildren } from 'react';
import s from './FullHeightPage.module.scss'
const FullHeightPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={s['page']}>
            {children}
        </div>
    );
};

export default FullHeightPage;