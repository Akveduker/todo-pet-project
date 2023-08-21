import { ColorPickerReducer } from "types/reducers/colorPickerReducer/colorPickerReducer";
import { ColorPickerState } from "types/ui/colorPicker/colorPicker";
import { COLOR_PICKER_REDUCER_NAMES } from "utils/constants/reducers/colorPickerReducerNames/colorPickerReducerNames";

export const colorPickerReducer = (state: ColorPickerState, action: ColorPickerReducer): ColorPickerState => {
    switch (action.type) {
        case COLOR_PICKER_REDUCER_NAMES.setValue:
            return { ...state, [action.payload.key]: action.payload.value }

        default:
            throw new Error('No action')
    }
}