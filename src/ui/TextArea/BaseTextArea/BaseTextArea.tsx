import React, { FC, HTMLProps } from 'react';
import s from './BaseTextArea.module.scss'

const BaseTextArea: FC<HTMLProps<HTMLTextAreaElement>> = (props) => {
    const className = `${s['text-area']} ${props.className ?? ''}`
    return (
        <textarea {...props} className={className} />
    );
};

export default BaseTextArea;