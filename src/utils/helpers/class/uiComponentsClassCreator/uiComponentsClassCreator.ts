import { baseClassWithAdded } from "../baseClassWithAdded/baseClassWithAdded"

export const uiComponentsClassCreator = (s: Record<string, string>, baseClass: string, styleModificator?: string, propClassName?: string) => {
    const baseWithStyle = styleModificator ?
        s[`${baseClass}__${styleModificator}`] :
        ''
    return `${baseClassWithAdded(s[baseClass], propClassName)} ${baseWithStyle} `
}