'use client';
import { FC, DragEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useToastStore } from '@/store/toast';

interface IToast {
    bodyClassName?: string;
}

const toastColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500'
};

const toastPositions = {
    topCenter: 'top-0 mx-auto',
    topRight: 'top-0 right-0',
    bottomCenter: 'bottom-0 mx-auto',
    bottomRight: 'bottom-0 right-0'
};

const Toast: FC<IToast> = (props) => {
    const { bodyClassName } = props;

    const { isToastOpen, message, toastType, position = 'topCenter', direction, closeToast, toast, duration } = useToastStore();

    // useEffect(() => {
    //     setTimeout(() => {
    //         closeToast();
    //     }, duration);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isToastOpen, duration]);

    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    const toastRef = useRef<HTMLDivElement>(null);

    const [isOverTouch, setIsOverTouch] = useState(false);

    const handleMouseDown = (event: MouseEvent) => {
        if (toastRef.current && containerRef.current) {
            const mousemove = (e: globalThis.MouseEvent) => {
                if (toastRef.current && containerRef.current) {
                    let diff = event.clientY - e.clientY;

                    const percent = 80 / 100;

                    const closeOffset = toastRef.current.clientHeight * percent;

                    console.log('diff', diff, 'closeOffset', closeOffset);

                    if (diff > closeOffset) {
                        setIsOverTouch(true);
                    }

                    console.log('opacity', 1 - diff / closeOffset / 2);

                    toastRef.current.style.transform = `translateY(-${diff}px)`;
                    toastRef.current.style.opacity = String(1 - diff / closeOffset / 2);
                }
            };

            document.addEventListener('mousemove', mousemove);

            document.addEventListener('mouseup', () => {
                if (isOverTouch) {
                    toast.close();
                    setIsOpen(false);
                } else {
                    if (isOpen && toastRef.current) {
                        toastRef.current.style.transform = `translateY(${0}px)`;
                        toastRef.current.style.opacity = '1';
                    }
                }

                document.removeEventListener('mousemove', mousemove);
            });
        }
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        setIsOverTouch(false);

        if (toastRef.current && containerRef.current) {
            const mousemove = (e: globalThis.TouchEvent) => {
                if (toastRef.current && containerRef.current) {
                    let diff = event.touches[0].clientY - e.touches[0].clientY;

                    const percent = 80 / 100;

                    const closeOffset = toastRef.current.clientHeight * percent;

                    if (diff > closeOffset) {
                        setIsOverTouch(true);
                    }

                    console.log('opacity', 1 - diff / closeOffset / 2);

                    toastRef.current.style.transform = `translateY(-${diff}px)`;
                    toastRef.current.style.opacity = String(1 - diff / closeOffset / 2);
                }
            };

            document.addEventListener('touchmove', mousemove);

            document.addEventListener('touchend', () => {
                if (isOverTouch) {
                    toast.close();
                    setIsOpen(false);
                } else {
                    if (isOpen && toastRef.current) {
                        toastRef.current.style.transform = `translateY(${0}px)`;
                        toastRef.current.style.opacity = '1';
                    }
                }

                document.removeEventListener('touchmove', mousemove);
            });
        }
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, 500);
        } else {
            setIsOpen(isToastOpen);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isToastOpen]);

    return (
        <>
            {isOpen && (
                <div ref={containerRef} className={`fixed w-full pt-20 ${toastPositions[position]} `}>
                    <div
                        ref={toastRef}
                        className={[
                            bodyClassName,
                            toastColors[toastType],
                            isToastOpen ? 'translate-y-0' : '-translate-y-52',
                            'transition duration-150 mx-auto rounded-lg text-white text-lg font-bold select-none cursor-grab'
                        ].join(' ')}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                    >
                        {message}
                    </div>
                </div>
            )}
        </>
    );
};

export default Toast;
