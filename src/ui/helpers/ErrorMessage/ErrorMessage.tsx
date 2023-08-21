import { FC, PropsWithChildren } from 'react';
import s from './ErrorMessage.module.scss'
const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <p className={s['message']}>{children}</p>
    );
};

export default ErrorMessage;