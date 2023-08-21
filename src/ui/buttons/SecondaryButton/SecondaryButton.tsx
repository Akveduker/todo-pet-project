import { FC, HtmlHTMLAttributes } from 'react';
import s from './SecondaryButton.module.scss'
import { STYLE_BUTTON_GRAY, STYLE_BUTTON_RED } from 'utils/constants/buttonTypeNames/secondaryButton/secondaryButtonNames';
import { uiComponentsClassCreator } from 'utils/helpers/class/uiComponentsClassCreator/uiComponentsClassCreator';
type SecondaryButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
    styleType?: typeof STYLE_BUTTON_RED | typeof STYLE_BUTTON_GRAY
}
const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
    const { className, children, styleType, ...rest } = props
    const modifiedClass = uiComponentsClassCreator(s, 'button', styleType ?? STYLE_BUTTON_GRAY, className)
    return (
        <button
            className={modifiedClass}
            {...rest}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;