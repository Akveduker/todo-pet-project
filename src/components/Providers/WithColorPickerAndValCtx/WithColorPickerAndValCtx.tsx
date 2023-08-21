import { hsvaToHex } from '@uiw/color-convert';
import { FormValidationSingleItemContext } from 'context/FormValidationSingleItemContext/FormSingleItemValidationContext';
import { useAppContext } from 'hooks/context/useAppContext';
import { useCreateInputValidationEvents } from 'hooks/inputValidation/useCreateInputValidationEvents/useCreateInputValidationEvents';
import { FC } from 'react';
import ColorPickerUi from 'ui/ColorPicker/ColorPicker';
import { defaultColor } from 'utils/constants/colorPicker/colorPickerDefaultValue/colorPickerDefaultValue';
import { VAL_IDLE } from 'utils/constants/validationTypes/validationTypes';

const WithColorPickerAndValCtx: FC = () => {

    const { name, validation } = useAppContext(FormValidationSingleItemContext)

    const [validateValue, setValue] = useCreateInputValidationEvents(name)

    const setColorPickerValue = (string: string) => {
        if (string === hsvaToHex(defaultColor) && validation.validationType === VAL_IDLE) return
        setValue(string)
        validateValue()
    }

    return (
        <div>
            <ColorPickerUi
                setValue={setColorPickerValue}
            />
        </div>
    );
};

export default WithColorPickerAndValCtx;