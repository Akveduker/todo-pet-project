import { hexToHsva, hsvaToHsla } from '@uiw/color-convert';
import { useCreateColorPickerState } from "./useCreateColorPickerState"
import { COLOR_PICKER_REDUCER_NAMES } from "utils/constants/reducers/colorPickerReducerNames/colorPickerReducerNames"
import { setValueHex } from "utils/helpers/validators/setValueHex/setValueHex"
import { ColorPickerReducerPayload } from 'types/reducers/colorPickerReducer/colorPickerReducer';
import { colorPickerStateKeys } from 'utils/constants/colorPicker/colorPickerStateKeys/colorPickerStateKeys';

export const useCreateColorPickerSetFc = () => {

    const [state, dispatch] = useCreateColorPickerState()
    const setValue = (payload: ColorPickerReducerPayload) => {
        dispatch({
            type: COLOR_PICKER_REDUCER_NAMES.setValue,
            payload
        })
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = setValueHex(e.target.value)

        if (value.length >= 6) {
            const hex = `#${value.slice(0, 6)}`
            setValue({ key: colorPickerStateKeys.finalColorValue, value: hexToHsva(hex) })
            setValue({ key: colorPickerStateKeys.hsva, value: hexToHsva(hex) })
            return
        }
        setValue({ key: colorPickerStateKeys.inputColor, value })
    }
    return [setValue, onChangeInput, state] as const
}