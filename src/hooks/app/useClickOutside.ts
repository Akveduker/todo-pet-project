import { TaskSettingsContext } from "context/TaskSettingsContext/TaskSettingsContext";
import { useAppContext } from "hooks/context/useAppContext";
import { useEffect, RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T> | null, handler: (e: MouseEvent) => void) => {
    // const { settingsModal } = useAppContext(TaskSettingsContext)
    const handleOutside = (e: MouseEvent) => {
        if (!ref) return
        if (!ref.current) return
        if (ref.current && !ref.current.contains((e.target as HTMLElement))) handler(e)
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [ref]);
}

