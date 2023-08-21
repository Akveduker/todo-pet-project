import Dropdown from '@components/Dropdown/Dropdown';
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import UsersList from '../../UsersList/UsersList';
import { useAppContext } from 'hooks/context/useAppContext';
import { GroupContext } from 'context/GroupContext/GroupContext';
import { GROUP_ROLE_USER } from 'utils/constants/groupRoles/groupRoles';
import { UsersListContext } from 'context/UsersListContext/UsersListContext';
import { useCreateUsersListState } from 'hooks/usersList/useCreateUsersListState';
import { TaskGroupContext } from 'context/TaskGroupContext/TaskGroupContext';
import { GroupContextTypeAdmin } from 'types/context/groupContext/groupContext';
import { UseStateType } from 'types/state/state';
import { convertUsersListInContextList } from 'utils/helpers/converters/convertUsersListInContextList/convertUsersListInContextList';

const ChangeUsersForTaskGroup = () => {
    const [{ persons }] = useAppContext(TaskGroupContext)
    const [{ usersArray }] = useAppContext(GroupContext) as UseStateType<GroupContextTypeAdmin>
    const state = useCreateUsersListState(convertUsersListInContextList(usersArray, persons))

    if (usersArray.length === 0) return (
        <PrimaryButton
            type='button'
            disabled
        >
            В этой группе нет участников
        </PrimaryButton>
    )
    return (
        <>
            <Dropdown
                header={
                    <PrimaryButton
                        type='button'
                    >
                        Редактировать участников
                    </PrimaryButton>
                }
                body={
                    <div>
                        <UsersListContext.Provider
                            value={state}
                        >
                            <UsersList />
                        </UsersListContext.Provider>
                    </div>
                }
            />
        </>
    );
};

export default ChangeUsersForTaskGroup;