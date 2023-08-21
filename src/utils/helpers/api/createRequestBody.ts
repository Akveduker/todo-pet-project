import { method } from 'lodash';
import { Axios, AxiosRequestConfig, Method } from "axios";

import { ApiReqData } from "types/api/api";
import Cookies from 'js-cookie';
import { storageNames } from 'utils/constants/storageNames/storageNames';

export const createRequestBody = (
    apiReturnType: ReturnType<ApiReqData<any>>,
    method: Method = 'get',
    isProtected: boolean = true,
): AxiosRequestConfig<string> => {
    const header = isProtected ? {
        'Authorization': `Bearer ${Cookies.get(storageNames.token)}`
    } : ''

    return {
        data: JSON.stringify(apiReturnType.data),
        method,
        url: apiReturnType.url,
        headers: {
            'Content-Type': 'application/json',
            ...header
        }
    }

}