import { ButtonTypes } from "../buttonTypes/buttonTypes";

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: ButtonTypes;
}