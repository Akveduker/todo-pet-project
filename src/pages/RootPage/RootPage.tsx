import DashboardLayout from '@components/Dashboard/DashboardLayout/DashboardLayout';
import s from './RootPage.module.scss'
import { Outlet } from 'react-router-dom';

const RootPage = () => {
    return (
        <div className={s['page']}>
            <div className={s['dashboard']}>
                <DashboardLayout />
            </div>
            <div className={s['content']}>
                <Outlet />
            </div>
        </div>
    );
};

export default RootPage;