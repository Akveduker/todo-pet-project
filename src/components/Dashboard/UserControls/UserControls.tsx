import { useCreateLogoutFc } from 'hooks/authorization/useCreateLogoutFc';
import React from 'react';
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import s from './UserControls.module.scss'
import UserInfoModal from '../UserInfoModal/UserInfoModal';
const UserControls = () => {
    const logOut = useCreateLogoutFc()
    return (
        <div className={s['container']}>
            <ul className={s['list']}>
                <li className={s['list__item']}>
                    <UserInfoModal />
                </li>
                <li className={s['list__item']}>
                    <button type='button' onClick={logOut}>
                        Выйти
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default UserControls;