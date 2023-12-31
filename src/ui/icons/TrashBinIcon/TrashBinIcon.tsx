import React, { FC } from 'react';
import { IconProps } from 'types/ui/icon/icon';
import { ICON_TYPE_BIG, ICON_TYPE_SMALL } from 'utils/constants/iconsTypeNames/iconsTypeNames';

const TrashBinIcon: FC<IconProps> = ({ type }) => {
    return (
        <>
            {(type === ICON_TYPE_BIG || !type) &&
                <svg
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="TrashIcon">
                        <path
                            id="Vector"
                            d="M15.2674 4.18521L15.3903 3.96749L15.2674 4.18521C15.3755 4.24618 15.4969 4.2794 15.6209 4.2819L18.505 4.34007C18.6411 4.34281 18.75 4.45391 18.75 4.59002V4.8C18.75 4.93807 18.6381 5.05 18.5 5.05H4.5C4.36193 5.05 4.25 4.93807 4.25 4.8V4.59002C4.25 4.45391 4.35888 4.34281 4.49496 4.34007L7.38632 4.28176C7.50351 4.27939 7.61852 4.24959 7.72211 4.19475L8.50731 3.77905C8.54335 3.75997 8.5835 3.75 8.62428 3.75H14.4306C14.4737 3.75 14.516 3.76112 14.5535 3.78228L15.2674 4.18521ZM5.06399 19.8003C5.06111 19.787 5.05946 19.7714 5.0596 19.7536L5.15451 6.99814C5.15553 6.8608 5.26715 6.75 5.4045 6.75H17.6773C17.8154 6.75 17.9273 6.86193 17.9273 7V19.6524C17.9273 19.6688 17.9258 19.6808 17.9237 19.6901C17.8851 19.8574 17.7372 20.3971 17.4202 20.7267C17.057 21.1045 16.4548 21.25 15.8696 21.25H11.2543H7.21588C6.63071 21.25 6.02854 21.1045 5.66533 20.7267C5.45106 20.5039 5.32686 20.3735 5.23971 20.2449C5.1599 20.1272 5.10836 20.0057 5.06399 19.8003ZM6.56204 7.28267C6.14783 7.28267 5.81204 7.61846 5.81204 8.03267V19.8C5.81204 20.2142 6.14783 20.55 6.56204 20.55H16.5235C16.9377 20.55 17.2735 20.2142 17.2735 19.8V8.03267C17.2735 7.61846 16.9377 7.28267 16.5235 7.28267H6.56204Z"
                            fill="#53514C"
                            stroke="#53514C"
                            strokeWidth="0.5"
                        />
                        <rect
                            id="Rectangle 4"
                            x={9}
                            y="10.5"
                            width={1}
                            height={6}
                            rx="0.5"
                            fill="#53514C"
                        />
                        <rect
                            id="Rectangle 5"
                            x={13}
                            y="10.5"
                            width={1}
                            height={6}
                            rx="0.5"
                            fill="#53514C"
                        />
                    </g>
                </svg>
            }
            {type === ICON_TYPE_SMALL &&
                <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="TrashIcon">
                        <g id="Vector">
                            <path
                                d="M2.07513 8.17027C2.07501 8.18514 2.07637 8.20004 2.07951 8.21458C2.12273 8.41461 2.18777 8.48226 2.37044 8.67224C2.55964 8.869 2.85951 8.93454 3.12707 8.93454H6.91024C7.1778 8.93454 7.47768 8.869 7.66687 8.67224C7.82796 8.5047 7.89758 8.24215 7.9147 8.16784C7.91781 8.15434 7.91908 8.14066 7.91908 8.12682V2.59558C7.91908 2.47486 7.82122 2.377 7.7005 2.377H2.3352C2.21511 2.377 2.11751 2.47387 2.11662 2.59396L2.07513 8.17027ZM2.62265 3.04704C2.62265 2.92632 2.72052 2.82845 2.84124 2.82845H7.19608C7.3168 2.82845 7.41466 2.92632 7.41466 3.04704V8.19135C7.41466 8.31207 7.3168 8.40994 7.19608 8.40994H2.84124C2.72052 8.40994 2.62265 8.31207 2.62265 8.19135V3.04704ZM6.80372 1.29804C6.76757 1.29731 6.73217 1.28763 6.70069 1.26986L6.38857 1.09371C6.35579 1.07521 6.31878 1.06549 6.28114 1.06549H3.74279C3.70713 1.06549 3.67202 1.07421 3.64051 1.09089L3.29725 1.27262C3.26706 1.28861 3.23354 1.29729 3.19938 1.29798L1.93537 1.32347C1.81639 1.32587 1.72119 1.42301 1.72119 1.54201V1.63381C1.72119 1.75453 1.81906 1.8524 1.93978 1.8524H8.06015C8.18087 1.8524 8.27873 1.75453 8.27873 1.63381V1.54201C8.27873 1.42301 8.18353 1.32587 8.06456 1.32347L6.80372 1.29804Z"
                                fill="#53514C"
                            />
                            <path
                                d="M3.90704 4.34426C3.90704 4.22354 4.0049 4.12568 4.12562 4.12568C4.24634 4.12568 4.34421 4.22354 4.34421 4.34426V6.53011C4.34421 6.65083 4.24634 6.74869 4.12562 6.74869C4.0049 6.74869 3.90704 6.65083 3.90704 6.53011V4.34426Z"
                                fill="#53514C"
                            />
                            <path
                                d="M5.65572 4.34426C5.65572 4.22354 5.75358 4.12568 5.8743 4.12568C5.99502 4.12568 6.09289 4.22354 6.09289 4.34426V6.53011C6.09289 6.65083 5.99502 6.74869 5.8743 6.74869C5.75358 6.74869 5.65572 6.65083 5.65572 6.53011V4.34426Z"
                                fill="#53514C"
                            />
                        </g>
                    </g>
                </svg>
            }
        </>
    );
};

export default TrashBinIcon;