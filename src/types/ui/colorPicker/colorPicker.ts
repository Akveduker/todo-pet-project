import { HsvaColor } from '@uiw/color-convert';
import { WithValidationContext } from "types/input/baseInput/baseInput";
import { colorPickerStateKeys } from "utils/constants/colorPicker/colorPickerStateKeys/colorPickerStateKeys";

export interface AppColorPickerProps {
    setValue: (color: string) => void
}
export interface ColorPickerState {
    [colorPickerStateKeys.hsva]: HsvaColor;
    [colorPickerStateKeys.inputColor]: string;
    [colorPickerStateKeys.finalColorValue]: HsvaColor;
}