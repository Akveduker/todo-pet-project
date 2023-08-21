import { createContext } from "react";
import { ModalContextType } from "types/context/modalContext/modalContext";

export const ModalContext = createContext<ModalContextType>(null)