import { GroupContext } from 'context/GroupContext/GroupContext';
import { useAppContext } from 'hooks/context/useAppContext';
import s from './GroupLayout.module.scss'
import CreateNewTaskGroup from '../TaskGroup/CreateNewTaskGroup/CreateNewTaskGroup';
import Groups from '../TaskGroup/Groups/Groups';
import WithTaskGroupListContext from '@components/Providers/WithTaskGroupListContext/WithTaskGroupListContext';
import WithForGroupAdmin from '@components/Providers/WithForGroupAdmin/WithForGroupAdmin';

const GroupLayout = () => {
    const [{ name }] = useAppContext(GroupContext)
    return (
        <WithTaskGroupListContext>
            <div className={s['container']}>
                <h1>
                    {name}
                </h1>
                <WithForGroupAdmin>
                    <div className={s['create-button']}>
                        <CreateNewTaskGroup />
                    </div>
                </WithForGroupAdmin>

                <div>
                    <Groups />
                </div>
            </div>
        </WithTaskGroupListContext>
    );
};

export default GroupLayout;