import { useCheckIsUserLoggedIn } from 'hooks/app/useCheckIsAuth';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'store/store';
import FullHeightPage from 'ui/helpers/FullHeightPage/FullHeightPage';
import Loader from 'ui/icons/Loader/Loader';
import { VAL_ERROR, VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import { userSelector } from 'utils/helpers/selectors/userSelector/userSelector';

const App = () => {
    const isLogged = useAppSelector(userSelector).isLogged
    const status = useCheckIsUserLoggedIn()
    if (status === VAL_SUCCESS && isLogged) return <Outlet />
    if (status === VAL_ERROR && !isLogged) return <Outlet />
    return (
        <FullHeightPage>
            <Loader />
        </FullHeightPage>
    );
};

export default App;