import { MongoValues } from "types/back/back";
import { FormatedGroup } from "types/groups/groups";

export interface User extends MongoValues {
    name: string,
    email: string;
    password: string;
    groups: FormatedGroup[];
    userColor: UserColor;
}
export interface UserColor {
    background: string;
    color: string;
}
export type UserStorage = Pick<User, 'email' | 'password'>

export type UserDataReq = {
    _id: string;
} & Partial<User>

export type UserBaseInfo = Pick<User, '_id' | 'name' | 'userColor'>

export type UserBaseInfoEnpoint = {
    personsId: string[]
}