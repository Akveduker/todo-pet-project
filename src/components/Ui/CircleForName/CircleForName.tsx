import React, { FC } from 'react';
import { UserColor } from 'types/user/user';
import s from './CircleForName.module.scss'
interface PersonItem {
    char: string;
    colors: UserColor;
}
const CircleForName: FC<PersonItem> = ({ char, colors }) => {
    return (
        <>
            <span
                className={s['icon']}
                style={{
                    backgroundColor: colors.background,
                    color: colors.color,
                }}
            >
                {char}
            </span>
        </>
    );
};

export default CircleForName;