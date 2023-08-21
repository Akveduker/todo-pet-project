import Logo from '../Logo/Logo';
import s from './DashboardLayout.module.scss'
import UserControls from '../UserControls/UserControls';
import GroupsLayout from '../Groups/GroupsLayout/GroupsLayout';
const DashboardLayout = () => {
    return (
        <div
            className={s['container']}
        >
            <Logo />
            <div className={`${s['control']}`}>
                <UserControls />
            </div>
            <div className={`${s['groups']} ${s['block']}`}>
                <GroupsLayout />
            </div>
        </div>
    );
};

export default DashboardLayout;