import { FC } from 'react';
import s from './PersonItem.module.scss'
import { UserColor } from 'types/user/user';
import CircleForName from '@components/Ui/CircleForName/CircleForName';
interface PersonItem {
    name: string;
    colors: UserColor;
}
const PersonItem: FC<PersonItem> = ({ name, colors }) => {
    return (
        <div className={s['item']}>
            <CircleForName
                char={name.charAt(0).toLocaleUpperCase()}
                colors={colors}
            />
            <p className={s['name']}>
                {name}
            </p>
        </div>
    );
};

export default PersonItem;