import { HsvaColor } from '@uiw/color-convert';
import { colorPickerStateKeys } from "utils/constants/colorPicker/colorPickerStateKeys/colorPickerStateKeys";
import { COLOR_PICKER_REDUCER_NAMES } from "utils/constants/reducers/colorPickerReducerNames/colorPickerReducerNames"

export type ColorPickerReducerPayload = {
    key: typeof colorPickerStateKeys.inputColor;
    value: string,
} | {
    key: typeof colorPickerStateKeys.finalColorValue | typeof colorPickerStateKeys.hsva;
    value: HsvaColor,
}

export type ColorPickerReducer = {
    type: typeof COLOR_PICKER_REDUCER_NAMES.setValue,
    payload: ColorPickerReducerPayload
} 