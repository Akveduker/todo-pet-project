import { GroupContext } from "context/GroupContext/GroupContext"
import { useAppContext } from "hooks/context/useAppContext"
import { GROUP_ROLE_ADMIN } from "utils/constants/groupRoles/groupRoles"

export const useCheckIsUserAdmin = () => {
    const [{ userRole }] = useAppContext(GroupContext)
    return userRole === GROUP_ROLE_ADMIN
}