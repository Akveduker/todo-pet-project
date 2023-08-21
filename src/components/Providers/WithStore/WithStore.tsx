import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const WithStore: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default WithStore;