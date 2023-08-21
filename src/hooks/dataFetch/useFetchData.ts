import { useState } from "react"
import { DataFetch } from "types/dataFetch/dataFetch"
import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { VAL_ERROR, VAL_IDLE, VAL_LOADING, VAL_SUCCESS } from "utils/constants/validationTypes/validationTypes"

export const useFetchData = <T>() => {
    const [dataFetchState, setDataFetchState] = useState<DataFetch<T>>({
        fetchStatus: VAL_IDLE,
    });
    const getData = async (axiosBody: AxiosRequestConfig<string>) => {
        try {
            setDataFetchState({
                fetchStatus: VAL_LOADING,
            })
            const response = await Axios({
                ...axiosBody,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setDataFetchState({
                fetchStatus: VAL_SUCCESS,
                data: response.data
            })
        } catch (e) {
            const error = e as AxiosError<string>
            setDataFetchState({
                fetchStatus: VAL_ERROR,
                errorBody: error.response ? error.response.data : error.message,
            })
        }
    }
    return [dataFetchState, getData, setDataFetchState] as const
}