export const getParsedItemFromStorage = <T = unknown>(key: string, isLocal: boolean = true) => {
    const item = isLocal ? localStorage.getItem(key) : sessionStorage.getItem(key)
    if (item) {
        const data: T = JSON.parse(item)
        return data
    }
    return false
}