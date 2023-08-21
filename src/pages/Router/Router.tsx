import LogIn from '@components/Authorization/LogIn/LogIn';
import Registration from '@components/Authorization/Registration/Registration';
import ProtectedRoot from '@components/Router/ProtectedRoot/ProtectedRoot';
import App from 'pages/App/App';
import Authentication from 'pages/Authentication/Authentication';
import Group from 'pages/Group/Group';
import RootPage from 'pages/RootPage/RootPage';
import { Route, Routes } from 'react-router-dom';
import { routeParams } from 'utils/constants/routes/routeParams';
import { routes } from 'utils/constants/routes/routes';



const Router = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<App />} >
                <Route element={<ProtectedRoot />}>
                    <Route path={routes.home} element={<RootPage />} >
                        <Route path={`${routes.group}/:${routeParams.groupParam}`} element={<Group />} />
                    </Route>
                </Route>
                <Route path={routes.auth} element={<Authentication />}>
                    <Route index element={<LogIn />} />
                    <Route path={routes.reg} element={<Registration />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;