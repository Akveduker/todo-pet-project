import { useContext } from "react"

export const useAppContext = <T>(ctx: React.Context<T>) => {
    const currentContext = useContext(ctx)
    if (!currentContext) {
        throw new Error(
            "Context has to be used within Provider"
        )
    }
    return currentContext
}