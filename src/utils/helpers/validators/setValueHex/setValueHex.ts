const regEx = /[^A-Z0-9a-z]/g

export const setValueHex = (str: string) => {
    return str.replace(regEx, '')
}