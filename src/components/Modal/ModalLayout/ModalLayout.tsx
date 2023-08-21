import React, { FC, useEffect, useRef } from 'react';
import { ModalLayoutProps } from 'types/ui/modal/modal';
const ModalLayout: FC<ModalLayoutProps> = ({ isOpen, children, closeModal, layoutClass, stopScroll, containerRef, ...rest }) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (isOpen && ref.current) {
            if (stopScroll) {
                document.body.style.overflow = 'hidden'
            }
            ref.current.focus()
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <>
            {isOpen &&

                <div
                    {...rest}

                    ref={containerRef}
                    className={layoutClass}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') closeModal()
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        if (e.target === e.currentTarget) closeModal()
                    }}

                >
                    <div
                        ref={ref}
                    >
                        {children}
                    </div>

                </div>

            }
        </>
    );
};

export default ModalLayout;