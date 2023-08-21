import { FC, PropsWithChildren } from 'react';
import Loader from 'ui/icons/Loader/Loader';
import s from './WithLoader.module.scss'
import { LoaderProviderProps } from 'types/ui/loader/loader';

const WithLoader: FC<PropsWithChildren<LoaderProviderProps>> = ({ children, condition, loaderType }) => {

    return (
        <div className={s['container']}>
            {children}
            {condition && <div className={s['loader']}><Loader loaderType={loaderType} /></div>}
        </div>
    );
};

export default WithLoader;  