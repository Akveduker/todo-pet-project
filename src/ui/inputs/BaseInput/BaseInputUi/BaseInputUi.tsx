import { FC } from 'react';
import s from './BaseInputUi.module.scss'
const BaseInputUi: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const className = `${s['input']} ${props.className ?? ''}`
    return (
        <div>
            <input
                {...props}
                className={className}
            />
        </div>
    );
};

export default BaseInputUi;