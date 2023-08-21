import { useSetSmallModalState } from "hooks/modal/useSetSmallModalState"
import { useCheckUserInTask } from './useCheckIsUserInTask';
import { useCheckerIsUserAreNotInTask } from "./useCheckerIsUserAreNotInTask";

export const useSetTaskChangeStatusModal = <T extends HTMLElement>() => {
    const isInTask = useCheckUserInTask()
    const [isOpen, closeModal, openModal, ...rest] = useSetSmallModalState<T>()
    const checkIsUserAreNotInTask = useCheckerIsUserAreNotInTask()


    return [isOpen, closeModal, checkIsUserAreNotInTask(openModal), ...rest] as const
}