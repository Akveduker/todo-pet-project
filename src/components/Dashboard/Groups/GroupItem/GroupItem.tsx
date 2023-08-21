import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormatedGroup } from 'types/groups/groups';
import s from './GroupItem.module.scss'
import { GROUP_ROLE_ADMIN } from 'utils/constants/groupRoles/groupRoles';
import { routes } from 'utils/constants/routes/routes';
import { useDeleteGroup } from 'hooks/group/useDeleteGroup';
import WithLoader from '@components/Providers/WithLoader/WithLoader';
import { VAL_LOADING } from 'utils/constants/validationTypes/validationTypes';
import DeleteGroup from '../DeleteGroup/DeleteGroup';
import LinkLikeButton from 'ui/links/LinkLikeButton/LinkLikeButton';

const GroupItem: FC<FormatedGroup> = ({ name, _id, role }) => {
    const [delteHandler, data] = useDeleteGroup(_id)
    return (
        <div className={`${s['item']}`}>
            <WithLoader
                condition={data.fetchStatus === VAL_LOADING}
                loaderType='small'
            >
                <h4 className={s['name']}>
                    {name}
                </h4>
                {role === GROUP_ROLE_ADMIN &&
                    <p className={s['id']}>
                        Id: {_id}
                    </p>
                }
                <p>
                    Ваша роль: <span className={`${s[`role`]} ${s[`role--${role}`]} `}>{role}</span>
                </p>
                <div className={s['link']}>
                    <LinkLikeButton
                        to={`/${routes.group}/${_id}`}
                    >
                        Перейти к группе
                    </LinkLikeButton>
                </div>
                <DeleteGroup
                    userRole={role}
                    delteHandler={delteHandler}
                />
            </WithLoader>
        </div>

    );
};

export default GroupItem;