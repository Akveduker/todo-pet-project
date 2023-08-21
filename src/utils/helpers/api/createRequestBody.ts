import { method } from 'lodash';
import { Axios, AxiosRequestConfig, Method } from "axios";

import { ApiReqData } from "types/api/api";

export const createRequestBody = (
    apiReturnType: ReturnType<ApiReqData<any>>,
    method: Method = 'get'
): AxiosRequestConfig<string> => {
    return {
        data: JSON.stringify(apiReturnType.data),
        method,
        url: apiReturnType.url,
    }
}