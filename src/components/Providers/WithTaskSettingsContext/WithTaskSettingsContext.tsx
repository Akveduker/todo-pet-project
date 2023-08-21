import TaskSettingsBody from '@components/Group/Task/TaskSettings/TaskSettings';
import { TaskSettingsContext } from 'context/TaskSettingsContext/TaskSettingsContext';
import { useCreateTaskSettingsState } from 'hooks/task/useCreateTaskSettingsState';
import { FC, PropsWithChildren } from 'react';

const WithTaskSettingsContext: FC<PropsWithChildren> = ({ children }) => {
    const taskState = useCreateTaskSettingsState()
    return (
        <TaskSettingsContext.Provider
            value={taskState}
        >
            {children}
        </TaskSettingsContext.Provider>
    );
};

export default WithTaskSettingsContext;