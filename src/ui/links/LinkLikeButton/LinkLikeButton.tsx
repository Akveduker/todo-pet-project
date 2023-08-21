import { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonTypes } from 'types/ui/buttonTypes/buttonTypes';
import s from 'ui/buttons/PrimaryButton/PrimaryButton.module.scss';
import { BUTTON_NORMAL } from 'utils/constants/buttonTypeNames/primaryButton/primaryButtonNames';
import { uiComponentsClassCreator } from 'utils/helpers/class/uiComponentsClassCreator/uiComponentsClassCreator';
interface LinkLikeButtonProps extends LinkProps {
    styleType?: ButtonTypes;
}
const LinkLikeButton: FC<PropsWithChildren<LinkLikeButtonProps>> = (props) => {
    const { children, styleType, className, ...rest } = props
    const modifiedClass = uiComponentsClassCreator(s, 'button', styleType ?? BUTTON_NORMAL, className)
    return (
        <Link {...rest} className={modifiedClass}>
            {children}
        </Link>
    );
};

export default LinkLikeButton;