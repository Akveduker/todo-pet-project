import { TaskListContext } from 'context/TaskListContext/TaskListContext';
import { useCreateTaskListContext } from 'hooks/task/useCreateTaskListContext';
import { FC, PropsWithChildren } from 'react';

const WithTasksListContext: FC<PropsWithChildren> = ({ children }) => {
    const state = useCreateTaskListContext()
    return (
        <TaskListContext.Provider value={state}>
            {children}
        </TaskListContext.Provider>
    );
};

export default WithTasksListContext;