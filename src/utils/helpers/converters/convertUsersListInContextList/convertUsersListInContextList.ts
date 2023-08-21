import { GroupUser } from "types/groups/groups"

export const convertUsersListInContextList = (usersList: GroupUser[], listToCompare?: GroupUser[]) => {
    if (!listToCompare) {
        const usersForState = usersList.map(item => ({ ...item, isIn: false }))
        return usersForState
    }
    const usersForState = usersList.map(item => {
        const secondListItem = listToCompare.find(secondItem => secondItem._id)
        if (secondListItem) {
            return {
                ...item,
                isIn: true
            }
        }
        return {
            ...item,
            isIn: false,
        }
    })
    return usersForState
}