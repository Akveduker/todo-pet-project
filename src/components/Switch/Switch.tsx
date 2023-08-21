import { SwitchContext } from 'context/SwitchContext/SwitchContext';
import { useCreateSwitchFc } from 'hooks/switch/useCreateSwitchFc';
import React, { FC } from 'react';
import { SwitchProps } from 'types/components/switch/switch';


const Switch: FC<SwitchProps> = ({ swithItems }) => {
    const [state, changeFc] = useCreateSwitchFc(swithItems)
    const activeComponent = state.find(({ isActive }) => isActive)
    return (
        <SwitchContext.Provider value={changeFc}>
            {activeComponent ? activeComponent.component : swithItems[0].component}
        </SwitchContext.Provider>
    );
};

export default Switch;