import React, { FC, useEffect, useState } from 'react';
import s from './Checkbox.module.scss'
import CheckboxChecked from 'ui/icons/CheckboxChecked/CheckboxChecked';
import CheckboxIcon from 'ui/icons/CheckboxIcon/CheckboxIcon';
interface CheckboxProps {
    setValue: (current: boolean) => void
    isDefaultActive?: boolean;
}
const Checkbox: FC<CheckboxProps> = ({ setValue, isDefaultActive }) => {

    const [isActive, setIsActive] = useState(isDefaultActive ?? false)


    useEffect(() => {
        setValue(isActive)
    }, [isActive])

    return (
        <label className={s['container']}>
            <input type="checkbox" className={s['checkbox']} onChange={() => setIsActive(!isActive)} />
            <span className={s['fake-checkbox']}>
                {isActive ?
                    <CheckboxChecked />
                    :
                    <CheckboxIcon />
                }
            </span>
        </label>
    );
};

export default Checkbox;