import s from './GroupsLayout.module.scss'
import { Scrollbars } from 'react-custom-scrollbars-2';
import ConnectToGroup from '@components/Dashboard/Groups/ConnectToGroup/ConnectToGroup';
import CreateGroup from '../CreateGroup/CreateGroup';
import GroupList from '../GroupList/GroupList';
import { useAppSelector } from 'store/store';
import { userSelector } from 'utils/helpers/selectors/userSelector/userSelector';

const Groups = () => {
    const { groups } = useAppSelector(userSelector)
    return (
        <>
            <h3 className={s['title']}>
                Ваши Группы
                <CreateGroup />
            </h3>
            <div className={s['groups']}>
                <Scrollbars style={{ width: 300, height: 588 }} className={s['groups__container']}>
                    <div>
                        {groups.length ?
                            <GroupList />
                            :
                            <h4>Вы не являетесь участником или владельцам ни одной группы</h4>
                        }
                        {groups.length < 5 &&
                            <div className={s['connect']}>
                                <ConnectToGroup />
                            </div>
                        }
                    </div>

                </Scrollbars>
                {groups.length >= 5 &&
                    <div className={s['connect']}>
                        <ConnectToGroup />
                    </div>
                }
            </div>
        </>
    );
};

export default Groups;