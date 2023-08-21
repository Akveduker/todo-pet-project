import { useCheckIsUserTaskGroupUser } from 'hooks/taskGroup/useCheckIsUserTaskGroupUser';
import { FC, PropsWithChildren } from 'react';

const WithForAdminAndTaskGroupUsers: FC<PropsWithChildren> = ({ children }) => {
    const isInGroup = useCheckIsUserTaskGroupUser()
    return (
        <>
            {isInGroup && children}
        </>
    );
};

export default WithForAdminAndTaskGroupUsers;