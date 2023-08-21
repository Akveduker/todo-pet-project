import React, { FC, useState } from 'react';
import { GroupUser } from 'types/groups/groups';
import Checkbox from 'types/ui/Checkbox/Checkbox';
import s from './UserItem.module.scss'
import { useAppContext } from 'hooks/context/useAppContext';
import { UsersListContext } from 'context/UsersListContext/UsersListContext';

const UserItem: FC<GroupUser> = ({ name, _id }) => {
    const { state, changeUser } = useAppContext(UsersListContext)

    const current = state.find(item => item._id === _id)

    if (!current) return null

    const toggleUser = (isActive: boolean) => {
        changeUser({ ...current, isIn: isActive })
    }
    return (
        <label className={s['item']}>
            <div className={s['info']}>
                <Checkbox setValue={toggleUser} isDefaultActive={current.isIn} />
                <p className={s['name']}> Имя: {name} </p>
            </div>

        </label>
    );
};

export default UserItem;