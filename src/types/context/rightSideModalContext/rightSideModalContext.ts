import { UseStateType } from "types/state/state";

export type RightSideModalContextType = UseStateType<{
    closeFc: () => void;
    groupId: string;
}> | null