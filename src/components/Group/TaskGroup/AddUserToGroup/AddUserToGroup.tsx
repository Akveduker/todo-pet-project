import Dropdown from '@components/Dropdown/Dropdown';
import { FC } from 'react';
import UsersList from '../UsersList/UsersList';
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import { useAppContext } from 'hooks/context/useAppContext';
import { UsersListContext } from 'context/UsersListContext/UsersListContext';

const AddUserToGroup: FC = () => {
    const { state } = useAppContext(UsersListContext)
    if (state.length === 0) return (
        <PrimaryButton
            type={'button'}
            disabled
        >
            Нет пользователей
        </PrimaryButton>
    )
    return (
        <div>
            <Dropdown
                header={
                    <PrimaryButton
                        type={'button'}
                    >
                        Добавить пользователей (не обязательно)
                    </PrimaryButton>
                }
                body={
                    <UsersList />
                }
            />
        </div>
    );
};

export default AddUserToGroup;