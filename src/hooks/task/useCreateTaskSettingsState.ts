import { useSetModalState } from "hooks/modal/useSetModalState"
import { useSetSmallModalState } from "hooks/modal/useSetSmallModalState"
import { useEffect, useRef, useState } from "react"
import { TaskSettingsContextType } from "types/context/taskSettingsContext/taskSettingsContext"
import { useCheckerIsUserAreNotInTask } from "./useCheckerIsUserAreNotInTask"

export const useCreateTaskSettingsState = () => {

    const checkIsUserAreNotInTask = useCheckerIsUserAreNotInTask()

    const [isSettingsOpen, closeSettings, openSettings] = useSetModalState()

    const [isModalOpen, closeModal, openModal] = useSetModalState()

    const [isControlsOpen, closeControls, openControls, ...restSettings] = useSetSmallModalState()

    const [isUsed, setIsUsed] = useState(false)

    const childrenRef = useRef<HTMLDivElement>(null)


    const closeControlsModified = (...args: Parameters<typeof closeControls>) => {
        const [event] = args
        if (event && childrenRef && childrenRef.current && childrenRef.current.contains(event.target as HTMLElement)) {
            return
        }
        closeModal()
        closeControls(...args)
    }

    let timeout: NodeJS.Timeout

    const openSettingsModified = () => {
        openSettings()
        clearTimeout(timeout)
        setIsUsed(false)
    }

    const closeSettingsModified = (time = 500) => {
        timeout = setTimeout(closeSettings, time)
    }

    const closeModalModified = () => {
        setIsUsed(true)
        closeControls()
        closeModal()
    }

    const outsideSettingsCloseAfterAction = () => {
        if (isUsed && isSettingsOpen && !isControlsOpen) {
            setIsUsed(false)
            closeSettings()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', outsideSettingsCloseAfterAction)
        document.addEventListener('keydown', outsideSettingsCloseAfterAction)
        return () => {
            document.removeEventListener('mousedown', outsideSettingsCloseAfterAction)
            document.removeEventListener('keydown', outsideSettingsCloseAfterAction)
        }
    }, [isUsed])

    const taskSetiingsState: TaskSettingsContextType = {
        settingsState: [isSettingsOpen, checkIsUserAreNotInTask(closeSettingsModified), checkIsUserAreNotInTask(openSettingsModified)],
        settingsModal: [isModalOpen, checkIsUserAreNotInTask(closeModalModified), checkIsUserAreNotInTask(openModal)],
        settingsControls: [isControlsOpen, checkIsUserAreNotInTask(closeControlsModified), checkIsUserAreNotInTask(openControls), ...restSettings],
        childrenRef: childrenRef,
        isUsed: [isUsed, setIsUsed],
    }
    return taskSetiingsState
}