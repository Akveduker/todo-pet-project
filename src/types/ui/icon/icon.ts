import { ICON_TYPE_BIG, ICON_TYPE_SMALL } from "utils/constants/iconsTypeNames/iconsTypeNames";

export type IconsStyleTypes = typeof ICON_TYPE_BIG | typeof ICON_TYPE_SMALL;
export interface IconProps {
    type?: IconsStyleTypes;
}