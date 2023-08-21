import { useCreateTaskListContext } from 'hooks/task/useCreateTaskListContext';
export type TaskListContextState = ReturnType<typeof useCreateTaskListContext>

export type TaskListContextType = TaskListContextState | null