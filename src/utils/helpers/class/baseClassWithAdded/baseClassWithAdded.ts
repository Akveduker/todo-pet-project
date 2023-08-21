export const baseClassWithAdded = (baseClass: string, otherClasses?: string) => {
    return `${baseClass} ${otherClasses ?? ''}`
}