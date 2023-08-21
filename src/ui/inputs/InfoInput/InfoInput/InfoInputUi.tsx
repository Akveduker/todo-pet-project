import { FC, InputHTMLAttributes, forwardRef } from 'react';
import s from './InfoInputUi.module.scss'
const InfoInputUi = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    const className = `${s['input']} ${props.className}`
    return (
        <input
            {...props}
            className={className}
            ref={ref}
        />

    )
})

export default InfoInputUi;