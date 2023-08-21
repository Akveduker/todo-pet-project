export interface SwitchProps {
    swithItems: SwitchItem[]
}

export interface SwitchItem {
    name: string;
    component: React.ReactNode;
    isActive?: boolean;
}