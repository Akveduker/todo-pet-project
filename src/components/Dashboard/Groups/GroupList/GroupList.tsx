import React from 'react';
import { useAppSelector } from 'store/store';
import { userSelector } from 'utils/helpers/selectors/userSelector/userSelector';
import GroupItem from '../GroupItem/GroupItem';
import s from './GroupList.module.scss'

const GroupList = () => {
    const { groups } = useAppSelector(userSelector)
    const groupsLength = groups.length
    return (
        <>
            {groups.map(groupItem => {
                return (
                    <div className={`${s['item']}  ${groupsLength >= 5 ? s['item--small'] : ''}`} key={groupItem._id}>
                        <GroupItem
                            {...groupItem}
                        />
                    </div>
                )
            })}
        </>
    );
};

export default GroupList;