import { FC } from 'react';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';
import FullHeightPage from 'ui/helpers/FullHeightPage/FullHeightPage';
import s from './GroupError.module.scss'
import { routes } from 'utils/constants/routes/routes';
import LinkLikeButton from 'ui/links/LinkLikeButton/LinkLikeButton';
interface GroupErrorProps {
    error: string
}
const GroupError: FC<GroupErrorProps> = ({ error }) => {
    return (
        <FullHeightPage>
            <div>
                <h1 className={s['title']}>Произошла ошибка</h1>
                <div className={s['error']}>
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                </div>
                <div className={s['button-container']}>
                    Поменять
                    {/* <LinkLikeButton
                        to={`${routes.home}`}
                        className={s['button']}
                    >
                        Вернуться
                    </LinkLikeButton> */}
                </div>

            </div>
        </FullHeightPage>
    );
};

export default GroupError;