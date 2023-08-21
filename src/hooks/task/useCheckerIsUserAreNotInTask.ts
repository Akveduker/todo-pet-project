import { useCheckIsIdValid } from 'hooks/group/useCheckIsIdValid';
import { wrapperForUserStatusCheck } from 'utils/helpers/validators/wrapperForUserStatusCheck/wrapperForUserStatusCheck';
import { useCheckUserInTask } from './useCheckIsUserInTask';
export const useCheckerIsUserAreNotInTask = () => {

    const isInTask = useCheckUserInTask()
    const checkIsUserAreNotInTask = wrapperForUserStatusCheck(!isInTask)

    return checkIsUserAreNotInTask
}

