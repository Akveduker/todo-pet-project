import { createContext } from "react";
import { UsersListContextType } from "types/context/usersListContext/usersListContext";


export const UsersListContext = createContext<UsersListContextType>(null)