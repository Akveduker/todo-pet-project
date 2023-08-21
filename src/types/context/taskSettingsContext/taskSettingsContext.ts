import { useSetModalState } from 'hooks/modal/useSetModalState';
import { useSetSmallModalState } from 'hooks/modal/useSetSmallModalState';
import { RefObject } from 'react';
import { UseStateType } from 'types/state/state';
import { ModalProps, SmallModalProps } from "types/ui/modal/modal";

export type SettingsContextItem = ReturnType<typeof useSetModalState>
export type TaskSettingsContextType = {
    settingsState: [SettingsContextItem[0], (time?: number) => void, SettingsContextItem[2]];
    settingsControls: ReturnType<typeof useSetSmallModalState>
    settingsModal: SettingsContextItem;
    childrenRef: RefObject<HTMLDivElement>;
    isUsed: UseStateType<boolean>
} | null