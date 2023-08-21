import { storageNames } from './../../../utils/constants/storageNames/storageNames';
import { createSlice } from "@reduxjs/toolkit";
import { UserInitialState } from "./types";
import { storeNames } from "utils/constants/storeNames/storeNames";
import { User } from "types/user/user";
import { FormatedGroup } from 'types/groups/groups';
const initialState: UserInitialState = {
    userColor: {
        background: '',
        color: ''
    },
    isLogged: false,
    name: '',
    email: '',
    password: '',
    __v: 0,
    _id: '',
    groups: []
}
export const userSlice = createSlice({
    name: storeNames.user,
    initialState,
    reducers: {
        setUser: (state, { payload }: { payload: User }) => {
            localStorage.setItem(storageNames.user, JSON.stringify({
                email: payload.email,
                password: payload.password
            }))
            return {
                isLogged: true,
                ...payload,
            }
        },
        logOutUser: () => {
            localStorage.removeItem(storageNames.user)
            return initialState;
        },
        setGroups: (state, { payload }: { payload: FormatedGroup[] }) => {
            state.groups = payload
        }
    }
})
export const userReducer = userSlice.reducer
export const { setUser, logOutUser, setGroups } = userSlice.actions