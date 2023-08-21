import { GroupContext } from 'context/GroupContext/GroupContext';
import { TaskGroupListContext } from 'context/TaskGroupListContext/TaskGroupListContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { FC, PropsWithChildren, useState } from 'react';

const WithTaskGroupListContext: FC<PropsWithChildren> = ({ children }) => {
    const [{ taskGroups }] = useAppContext(GroupContext)
    const state = useState(taskGroups)
    return (
        <TaskGroupListContext.Provider
            value={state}
        >
            {children}
        </TaskGroupListContext.Provider>
    );
};

export default WithTaskGroupListContext;