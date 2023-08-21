export type LoaderTypes = 'small';
export interface LoaderProps {
    loaderType?: LoaderTypes;
}
export interface LoaderProviderProps extends LoaderProps {
    condition: boolean;
}