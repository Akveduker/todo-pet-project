import { GroupContext } from 'context/GroupContext/GroupContext';
import { useAppContext } from 'hooks/context/useAppContext';
import React, { FC, PropsWithChildren } from 'react';
import { GROUP_ROLE_ADMIN } from 'utils/constants/groupRoles/groupRoles';

const WithForGroupAdmin: FC<PropsWithChildren> = ({ children }) => {
    const [{ userRole }] = useAppContext(GroupContext)
    return (
        <>
            {userRole === GROUP_ROLE_ADMIN && children}
        </>
    );
};

export default WithForGroupAdmin;