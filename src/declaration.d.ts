declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.jpg';
declare module '*.png';
declare module '*.json';

declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.sass' {
    const classes: Record<string, string>;
    export default classes;
}