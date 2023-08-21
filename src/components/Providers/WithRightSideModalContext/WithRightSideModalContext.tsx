import { RightSideModalContext } from 'context/RightSideModalContext/RightSideModalContext';
import { FC, PropsWithChildren, useState } from 'react';

const WithRightSideModalContext: FC<PropsWithChildren> = ({ children }) => {
    const state = useState({
        closeFc: () => { },
        groupId: ''
    })
    return (
        <RightSideModalContext.Provider
            value={state}
        >
            {children}
        </RightSideModalContext.Provider>
    );
};

export default WithRightSideModalContext;