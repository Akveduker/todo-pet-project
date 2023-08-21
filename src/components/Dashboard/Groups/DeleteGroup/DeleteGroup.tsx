import React, { FC, useRef } from 'react';
import s from './DeleteGroup.module.scss'
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import SmallModal from '@components/Modal/SmallModal/SmallModal';
import { useSetSmallModalState } from 'hooks/modal/useSetSmallModalState';
import { GroupRoles } from 'types/groups/groups';
import { GROUP_ROLE_USER } from 'utils/constants/groupRoles/groupRoles';
import DeleteIcon from 'ui/icons/DeleteIcon/DeleteIcon';
interface DeleteGroupProps {
    delteHandler: () => void;
    userRole: GroupRoles;
}
const DeleteGroup: FC<DeleteGroupProps> = ({ delteHandler, userRole }) => {
    const [isOpen, closeModal, openModal, pos, parentRef] = useSetSmallModalState<HTMLDivElement>()
    return (
        <>
            <div
                ref={parentRef}
            >
                <PrimaryButton
                    styleType='small'
                    className={s['button']}
                    type='button'
                    onClick={openModal(10, -5)}
                >
                    <DeleteIcon />
                </PrimaryButton>
            </div>
            <SmallModal
                isOpen={isOpen}
                closeModal={closeModal}
                pos={pos}
            >
                <div className={s['delete']}>
                    <p>
                        {userRole === GROUP_ROLE_USER ?
                            'Вы уверены что хотите покинуть эту группу'
                            :
                            'Вы уверены что хотите удалить эту группу'
                        }
                    </p>
                    <div className={s['delete__buttons']}>
                        <PrimaryButton
                            onClick={delteHandler}
                            className={s['delete__button-yes']}
                        >
                            Да
                        </PrimaryButton>
                        <PrimaryButton
                            onClick={() => closeModal()}
                        >
                            Нет
                        </PrimaryButton>
                    </div>
                </div>
            </SmallModal>
        </>
    );
};

export default DeleteGroup;