import { FC, PropsWithChildren } from 'react';
import s from './PrimaryButton.module.scss'
import { BUTTON_NORMAL } from 'utils/constants/buttonTypeNames/primaryButton/primaryButtonNames';
import { uiComponentsClassCreator } from 'utils/helpers/class/uiComponentsClassCreator/uiComponentsClassCreator';
import { PrimaryButtonProps } from 'types/ui/primaryButton/primaryButton';

const PrimaryButton: FC<PropsWithChildren<PrimaryButtonProps>> = (props) => {
    const { children, styleType, className, ...rest } = props
    const modifiedClass = uiComponentsClassCreator(s, 'button', styleType ?? BUTTON_NORMAL, className)
    return (
        <button {...rest} className={modifiedClass}>
            {children}
        </button>
    );
};

export default PrimaryButton;