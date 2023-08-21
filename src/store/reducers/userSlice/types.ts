import { User } from "types/user/user";

export type UserInitialState = {
    isLogged: boolean;
} & User