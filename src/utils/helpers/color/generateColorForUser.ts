import { generateRandomNumber } from "../numbers/generateRandomNumber"
import { hslaToHsva, hsvaToHex } from '@uiw/color-convert'

export const generateColorForUser = () => {
    const hsla = {
        h: generateRandomNumber(0, 360),
        s: generateRandomNumber(65, 85),
        l: generateRandomNumber(55, 60),
        a: 1
    }
    return {
        background: hsvaToHex(hslaToHsva(hsla)),
        color: ''
    }
}