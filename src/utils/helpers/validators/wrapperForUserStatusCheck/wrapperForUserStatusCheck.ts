export const wrapperForUserStatusCheck = (condition: boolean) => {
    return <T extends (...args: any) => any>(callback: T) => {
        return (...args: Parameters<T>) => {
            if (condition) return;
            return callback(...args)
        }
    }
}