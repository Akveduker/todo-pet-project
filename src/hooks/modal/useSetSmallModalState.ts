import { useRef, useState } from "react"
import { SmallModalPos } from "types/ui/modal/modal"
import { useSetModalState } from "./useSetModalState"

export const useSetSmallModalState = <T extends HTMLElement>() => {
    const [isOpen, closeModal, openModal] = useSetModalState()
    const [pos, setPos] = useState<SmallModalPos>({ posX: 0, posY: 0 })
    const parentRef = useRef<T>(null)
    const closeSmallModal = (e?: MouseEvent) => {
        if (!parentRef || !parentRef.current || !e) {
            closeModal()
            return
        }
        if (!parentRef.current.contains(e.target as HTMLElement)) closeModal()

    }
    const openSmallModal = (additionalPosX = 0, additionalPosY = 0) => {
        return <T extends HTMLElement>(e: React.MouseEvent<T>) => {
            const { x, y } = e.currentTarget.getBoundingClientRect()
            const posX = x + e.currentTarget.clientWidth + additionalPosX
            const posY = y + additionalPosY
            setPos({ posX, posY })
            openModal()
        }
    }


    return [isOpen, closeSmallModal, openSmallModal, pos, parentRef] as const
}