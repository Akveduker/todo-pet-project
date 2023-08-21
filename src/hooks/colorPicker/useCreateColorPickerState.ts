import { hsvaToHex } from '@uiw/color-convert';
import { useReducer } from 'react';
import { ColorPickerState } from 'types/ui/colorPicker/colorPicker';
import { defaultColor } from 'utils/constants/colorPicker/colorPickerDefaultValue/colorPickerDefaultValue';
import { colorPickerReducer } from 'utils/reducers/colorPickerReducer/colorPickerReducer';

export const useCreateColorPickerState = () => {
    const defaultState: ColorPickerState = {
        hsva: defaultColor,
        inputColor: hsvaToHex(defaultColor),
        finalColorValue: defaultColor
    }

    const [state, dispatch] = useReducer(colorPickerReducer, defaultState)
    return [state, dispatch] as const
}