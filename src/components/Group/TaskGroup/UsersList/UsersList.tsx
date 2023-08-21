import { useAppContext } from 'hooks/context/useAppContext';
import UserItem from '../UserItem/UserItem';
import s from './UsersList.module.scss'
import { UsersListContext } from 'context/UsersListContext/UsersListContext';
const UsersList = () => {
    const { state } = useAppContext(UsersListContext)
    return (
        <div>
            {state.map((item) => {
                return (
                    <div key={item._id} className={s['item']}>
                        <UserItem
                            {...item}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default UsersList;