import React, { FC, useEffect, useRef, useState } from 'react';
import { DropdownProps } from 'types/ui/dropdown/dropdown';
import s from './Dropdown.module.scss'
const Dropdown: FC<DropdownProps> = ({ header, body, bodyClassname, headerClassname, containerClassname }) => {

    const [heigth, setHeigth] = useState(0)

    const [isOpen, setIsOpen] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        if (!ref.current) return
        if (isOpen) setHeigth(ref.current.scrollHeight)
        if (!isOpen) setHeigth(0)
    }, [ref.current, isOpen])

    return (
        <div className={`${s['container']} ${containerClassname ?? ''}`}>
            <div
                onClick={toggleDropdown}
                className={`${s['header']} ${headerClassname ?? ''}`}
            >
                {header}
            </div>
            <div
                className={`${s['body']} ${bodyClassname ?? ''}`}
                ref={ref}
                style={{
                    maxHeight: heigth
                }}
            >
                {body}
            </div>
        </div>
    );
};

export default Dropdown;