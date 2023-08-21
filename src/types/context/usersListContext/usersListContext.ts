import { GroupUser } from "types/groups/groups";

export type UsersListContextType = {
    state: UsersListContextItem[];
    changeUser: (user: UsersListContextItem) => void;
} | null

export type UsersListContextItem = {
    isIn: boolean;
} & GroupUser