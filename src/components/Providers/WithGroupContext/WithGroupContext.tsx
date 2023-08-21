import { GroupContext } from 'context/GroupContext/GroupContext';
import React, { FC, PropsWithChildren, useState } from 'react';
import { GroupContextTypeUserTuple } from 'types/context/groupContext/groupContext';

const WithGroupContext: FC<PropsWithChildren<{ data: GroupContextTypeUserTuple }>> = ({ data, children }) => {
    const state = useState(data)
    return (
        <GroupContext.Provider
            value={state}
        >
            {children}
        </   GroupContext.Provider>
    );
};

export default WithGroupContext;