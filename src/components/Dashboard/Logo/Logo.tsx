import SmallModal from '@components/Modal/SmallModal/SmallModal';
import s from './Logo.module.scss'
import LogoIcon from 'ui/icons/LogoIcon/LogoIcon';
import { useSetSmallModalState } from 'hooks/modal/useSetSmallModalState';
import { useEffect, useRef, useState } from 'react';
const Logo = () => {
    // const [isOpen, closeModal, openModal, pos] = useSetSmallModalState()
    // const [menuWidth, setMenuWidth] = useState(0)
    // const ref = useRef<HTMLDivElement>(null)
    // useEffect(() => {
    //     if (ref.current) {
    //         setMenuWidth(ref.current.offsetWidth)
    //     }
    // }, [ref])
    return (
        <div
        // ref={ref}
        >
            {/* <SmallModal
                isOpen={isOpen}
                closeModal={closeModal}
                pos={pos}
            >
                <div
                    style={{
                        width: `${menuWidth + 50}px`
                    }}
                >
                </div>
            </SmallModal> */}
            <button
                className={s['logo']}
            // onClick={(e) => {
            //     const callback = openModal(-e.currentTarget.offsetWidth, e.currentTarget.offsetHeight)
            //     callback(e)
            // }}
            >
                <LogoIcon />
                AMAtoDo
            </button>
        </div>
    );
};

export default Logo;