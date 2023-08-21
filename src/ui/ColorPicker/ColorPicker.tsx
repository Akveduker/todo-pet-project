import { FC, useEffect } from 'react';
import s from './ColorPicker.module.scss'
import { hsvaToHex, hslaToHsva, hsvaToHsla } from '@uiw/color-convert';
import Saturation from '@uiw/react-color-saturation';
import Hue from 'react-color/lib/components/hue/Hue';
import { AppColorPickerProps } from 'types/ui/colorPicker/colorPicker';
import { useCreateColorPickerSetFc } from 'hooks/colorPicker/useCreateColorPickerSetFc';
import { colorPickerStateKeys } from 'utils/constants/colorPicker/colorPickerStateKeys/colorPickerStateKeys';
import { setValueHex } from 'utils/helpers/validators/setValueHex/setValueHex';
const ColorPickerUi: FC<AppColorPickerProps> = ({ setValue }) => {
    const [setColor, onChangeInput, state] = useCreateColorPickerSetFc()
    useEffect(() => {
        setValue(hsvaToHex(state.finalColorValue))
        setColor({ key: colorPickerStateKeys.inputColor, value: hsvaToHex(state.finalColorValue) })

    }, [state.finalColorValue])

    const setFinalColor = () => {
        setColor({
            key: colorPickerStateKeys.finalColorValue,
            value: state.hsva,
        })
    }
    return (
        <div className={s['container']}>
            <div>
                <Saturation
                    hsva={state.hsva}
                    className={s['saturation']}
                    onChange={(newColor) => {
                        setColor({
                            key: colorPickerStateKeys.hsva,
                            value: newColor,
                        })
                    }}
                    onMouseUp={setFinalColor}
                    onMouseLeave={setFinalColor}
                />
            </div>
            <div >
                <Hue
                    className={s['hue']}
                    color={hsvaToHsla(state.hsva)}
                    onChange={(color) => {
                        setColor({
                            key: colorPickerStateKeys.hsva,
                            value: hslaToHsva({ ...color.hsl, a: 0 }),
                        })
                    }}
                    onChangeComplete={(color) => {
                        setColor({
                            key: colorPickerStateKeys.finalColorValue,
                            value: hslaToHsva({ ...color.hsl, a: 0 }),
                        })
                    }}
                />
            </div>
            <div className={s['input-container']}>
                <label className={s['label']} >
                    <span> HEX: #</span><input className={s['input']} type="text" value={setValueHex(state.inputColor)} onChange={onChangeInput} />
                </label>
            </div>
        </div>
    );
};

export default ColorPickerUi;