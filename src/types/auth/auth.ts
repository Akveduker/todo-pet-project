import { User } from "types/user/user";

export type AuthDataReq = Pick<User, 'email' | 'password'>

export type RegDataReq = Pick<User, 'userColor' | 'name'> & AuthDataReq
export type RegDataReqFc = (email: string, password: string, name: string) => RegDataReq 