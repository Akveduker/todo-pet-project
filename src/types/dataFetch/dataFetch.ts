import { VAL_ERROR, VAL_IDLE, VAL_LOADING, VAL_SUCCESS } from 'utils/constants/validationTypes/validationTypes';
import { ValidationTypes } from './../validation/validation';
export type DataFetchNoData = {
    fetchStatus: typeof VAL_IDLE | typeof VAL_LOADING;
}
export type DataFetchError = {
    fetchStatus: typeof VAL_ERROR;
    errorBody: string
}
export type DataFetchSuccess<T> = {
    fetchStatus: typeof VAL_SUCCESS;
    data: T;
}
export type DataFetch<T> = DataFetchNoData | DataFetchError | DataFetchSuccess<T>
