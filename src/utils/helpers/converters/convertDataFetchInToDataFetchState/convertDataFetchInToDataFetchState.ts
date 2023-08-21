import { DataFetch } from "types/dataFetch/dataFetch";
import { VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes";

export const convertDataFetchInToDataFetchState = <T>(fetchState: DataFetch<T>) => {
    if (fetchState.fetchStatus !== VAL_SUCCESS) return fetchState
    return {
        fetchStatus: fetchState.fetchStatus
    }
}