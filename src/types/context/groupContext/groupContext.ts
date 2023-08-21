import { GroupUser, Group } from "types/groups/groups";
import { UseStateType } from "types/state/state";
import { GROUP_ROLE_ADMIN, GROUP_ROLE_USER } from "utils/constants/groupRoles/groupRoles";
type GroupContextTypeDefaulValues = Pick<Group, 'taskGroups' | 'name'> & {
    groupId: string;
    usersArray: GroupUser[];
}
export type GroupContextTypeUserTuple = GroupContextTypeAdmin | GroupContextTypeUser

export type GroupContextTypeAdmin = {
    userRole: typeof GROUP_ROLE_ADMIN;
} & GroupContextTypeDefaulValues
export type GroupContextTypeUser = {
    userRole: typeof GROUP_ROLE_USER;
} & GroupContextTypeDefaulValues

export type GroupContextType = UseStateType<GroupContextTypeUserTuple> | null
