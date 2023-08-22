import { User, UserColor } from './../user/user';
import { MongoValues } from "types/back/back";
import { TaskDate, TaskGroup } from "types/task/task";
import { GROUP_ROLE_ADMIN, GROUP_ROLE_USER } from "utils/constants/groupRoles/groupRoles";

export type GroupRoles = typeof GROUP_ROLE_ADMIN | typeof GROUP_ROLE_USER

export interface Group extends MongoValues {
    name: string;
    userRole: GroupRoles;
    taskGroups: TaskGroup[];
}

export interface GroupCreateDataReq {
    name: string;
    password: string;
}

export interface GroupDeleteDataReq {
    groupId: string;
}

export interface GroupConnectEndpoint {
    groupId: string;
    password: string;
}

export interface GroupPageEndpoint {
    groupId: string;
}

export interface CreateTaskGroupEndpoint {
    name: string;
    color: string;
    personsId: string[];
    dates: TaskDate;
    groupId: string;
    creatorId: string;
}


export interface DeleteTaskGroupEndpoint {
    groupId: string;
    userId: string;
    taskGroupId: string;
}


export type FormatedGroup = Pick<Group, 'name'> & Pick<MongoValues, '_id'> & {
    role: GroupRoles;
}

export type GroupUser = Pick<User, '_id' | 'name' | 'userColor'> 