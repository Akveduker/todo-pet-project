import { Group, GroupUser } from "types/groups/groups";

export const filterUsersInGroup = (usersArr: GroupUser[], idsArr: string[]) => {
    return usersArr.filter(({ _id }) => idsArr.includes(_id))
}