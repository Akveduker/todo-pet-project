import { AuthDataReq, RegDataReq } from "types/auth/auth";
import { CreateTaskGroupEndpoint, DeleteTaskGroupEndpoint, GroupConnectEndpoint, GroupCreateDataReq, GroupDeleteDataReq, GroupPageEndpoint } from "types/groups/groups";
import { CreateTaskEndpoint, DeleteTaskEndpoint, EditTaskEndpoint, GetTaskEndpoin } from "types/task/task";
import { UserBaseInfoEnpoint, UserDataReq } from "types/user/user";
import { createRequestBody } from "utils/helpers/api/createRequestBody";

class Api {
    static url = 'http://localhost:3001/api';
    authEndpoint = (data: AuthDataReq) => (createRequestBody({ url: `${Api.url}/auth`, data }, 'post', false))
    regEndpoint = (data: RegDataReq) => (createRequestBody({ url: `${Api.url}/reg`, data }, 'post', false))
    getUserEndpoint = () => (createRequestBody({ url: `${Api.url}/user`, data: {} }))
    userPatchEndpoint = (data: UserDataReq) => (createRequestBody({ url: `${Api.url}/user`, data }, 'patch'))
    groupCreateEndpoint = (data: GroupCreateDataReq) => (createRequestBody({ url: `${Api.url}/group/create`, data }, 'post'))
    groupDeleteEndpoint = (data: GroupDeleteDataReq) => (createRequestBody({ url: `${Api.url}/group/delete`, data }, 'delete'))
    groupConnectEndpoint = (data: GroupConnectEndpoint) => (createRequestBody({ url: `${Api.url}/group/connect`, data }, 'post'))
    groupPageEndpoint = (data: GroupPageEndpoint) => (createRequestBody({ url: `${Api.url}/group/page`, data }, 'post'))
    createTaskGroupEndpoint = (data: CreateTaskGroupEndpoint) => (createRequestBody({ url: `${Api.url}/taskGroup/create`, data }, 'post'))
    deleteTaskGroupEndpoint = (data: DeleteTaskGroupEndpoint) => (createRequestBody({ url: `${Api.url}/taskGroup/delete`, data }, 'delete'))
    createTaskEndpoint = (data: CreateTaskEndpoint) => (createRequestBody({ url: `${Api.url}/task/create`, data }, 'post'))
    getTaskListEndpoint = (data: GetTaskEndpoin) => (createRequestBody({ url: `${Api.url}/task/get`, data }, 'post'))
    deleteTaskEndpoint = (data: DeleteTaskEndpoint) => (createRequestBody({ url: `${Api.url}/task/delete`, data }, 'delete'))
    editTaskEndpoint = (data: EditTaskEndpoint) => (createRequestBody({ url: `${Api.url}/task/edit`, data }, 'patch'))
    getUsersBaseInfoEndpoint = (data: UserBaseInfoEnpoint) => (createRequestBody({ url: `${Api.url}/user/baseInfo`, data }, 'post'))
}
const myApi = new Api()
export const { authEndpoint,
    regEndpoint,
    userPatchEndpoint,
    groupCreateEndpoint,
    groupConnectEndpoint,
    groupPageEndpoint,
    createTaskGroupEndpoint,
    groupDeleteEndpoint,
    createTaskEndpoint,
    getTaskListEndpoint,
    deleteTaskEndpoint,
    editTaskEndpoint,
    deleteTaskGroupEndpoint,
    getUsersBaseInfoEndpoint,
    getUserEndpoint
} = myApi