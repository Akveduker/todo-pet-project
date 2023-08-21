import { setGroups } from 'store/reducers/userSlice/userSlice';
import { CSSProperties, PropsWithChildren, RefObject } from "react";

export interface ModalProps extends PropsWithChildren {
    isOpen: boolean;
    closeModal: () => void;
    containerRef?: RefObject<HTMLDivElement>
}
export type ModalLayoutProps = {
    layoutClass: string;
    style?: CSSProperties;
    stopScroll?: boolean;
} & ModalProps

export type SmallModalPos = {
    posX: number;
    posY: number;
}
export type SmallModalProps = {
    pos: SmallModalPos
    closeModal: (e?: MouseEvent) => void;
} & ModalProps