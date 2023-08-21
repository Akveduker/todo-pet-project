import GroupError from '@components/Group/GroupError/GroupError';
import s from './Group.module.scss'
import { useCheckIsIdValid } from 'hooks/group/useCheckIsIdValid';
import { Navigate } from 'react-router-dom';
import FullHeightPage from 'ui/helpers/FullHeightPage/FullHeightPage';
import Loader from 'ui/icons/Loader/Loader';
import { routes } from 'utils/constants/routes/routes';
import { VAL_ERROR, VAL_LOADING, VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import GroupLayout from '@components/Group/GroupLayout/GroupLayout';
import WithGroupContext from '@components/Providers/WithGroupContext/WithGroupContext';

const Group = () => {
    const result = useCheckIsIdValid()
    if (result === false) return <Navigate to={`${routes.home}`} />
    if (result.fetchStatus === VAL_LOADING) {
        return (
            <FullHeightPage>
                <Loader />
            </FullHeightPage>
        )
    }
    if (result.fetchStatus === VAL_ERROR) return <GroupError error={result.errorBody} />
    if (result.fetchStatus === VAL_SUCCESS) {
        return (
            <WithGroupContext
                data={result.data}
            >
                <div className={s['container']}>
                    <GroupLayout />
                </div>
            </WithGroupContext>
        );
    }
    return null
};

export default Group;