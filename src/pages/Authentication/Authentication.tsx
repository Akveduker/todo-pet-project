import { useAppSelector } from 'store/store';
import s from './Authentication.module.scss'
import { Navigate, Outlet } from 'react-router-dom';
import { userSelector } from 'utils/helpers/selectors/userSelector/userSelector';
import { routes } from 'utils/constants/routes/routes';
import FullHeightPage from 'ui/helpers/FullHeightPage/FullHeightPage';
const Authentication = () => {
    const isLoggedIn = useAppSelector(userSelector).isLogged
    if (isLoggedIn) return <Navigate to={routes.home} />
    return (
        <FullHeightPage>
            <div className={s['container']}>
                <Outlet />
            </div>
        </FullHeightPage>
    );
};

export default Authentication;