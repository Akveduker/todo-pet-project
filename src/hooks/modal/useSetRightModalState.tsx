import { useRef } from "react"
import { useSetModalState } from "./useSetModalState"
import { RightSideModalContext } from "context/RightSideModalContext/RightSideModalContext"
import { useAppContext } from "hooks/context/useAppContext"

export const useSetRightModalState = (groupId: string) => {
    const [isOpen, closeModal, openModal] = useSetModalState()
    const [state, setState] = useAppContext(RightSideModalContext)
    const openRightSideModal = <T extends HTMLDivElement>(e: React.MouseEvent<T, MouseEvent>) => {
        if (state.groupId === groupId && isOpen) return
        state.closeFc()
        setState({
            closeFc: closeModal,
            groupId
        })
        openModal()
    }
    return [isOpen, closeModal, openRightSideModal] as const
}