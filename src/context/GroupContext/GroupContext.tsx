import React, { createContext } from 'react';
import { GroupContextType } from 'types/context/groupContext/groupContext';


export const GroupContext = createContext<GroupContextType>(null)
