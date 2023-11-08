'use client';
import { FC, DragEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useToastStore } from '@/store/toast';
import Draggable, { DraggableEvent, DraggableEventHandler } from 'react-draggable';

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

    const handleMouseDown = (event: MouseEvent) => {
        if (toastRef.current && containerRef.current) {
            // console.log('offset', ref.current.offsetTop + ref.current.offsetHeight);
            // console.log('event click', event.clientY);
            //const shiftY = event.clientY - Number(ref.current.getBoundingClientRect().top);

            const mousemove = (e: globalThis.MouseEvent) => {
                if (toastRef.current && containerRef.current) {
                    let diff = event.clientY - e.clientY;

                    // console.log('diff move', diff);

                    // console.log('shiftY', shiftY);
                    // console.log('event clientY', e.clientY);
                    // console.log('ref', ref.current?.getBoundingClientRect().top);
                    // const newTop = event.clientY - shiftY - containerRef.current.getBoundingClientRect().top;
                    // console.log('newTop', newTop);

                    const percent = 80 / 100;

                    const closeOffset = toastRef.current.clientHeight * percent;

                    //console.log('ref.current', ref.current.clientHeight);

                    console.log('diff', diff, 'closeOffset', closeOffset);

                    if (diff > closeOffset) {
                        toast.close();
                        setIsOpen(false);
                    }

                    console.log('opacity', 1 - diff / closeOffset);

                    toastRef.current.style.transform = `translateY(-${diff}px)`;
                    toastRef.current.style.opacity = String(1 - diff / closeOffset);
                }
            };

            document.addEventListener('mousemove', mousemove);

            document.addEventListener('mouseup', () => {
                if (isOpen && toastRef.current) {
                    toastRef.current.style.transform = `translateY(${0}px)`;
                    toastRef.current.style.opacity = '1';
                }

                document.removeEventListener('mousemove', mousemove);
            });
        }
    };

    useEffect(() => {
        if (isOpen) {
            //console.log('if isOpen', isOpen);

            setTimeout(() => {
                setIsOpen(false);
                //console.log('close', isOpen);
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
                            'transition duration-300 mx-auto rounded-lg text-white text-lg font-bold select-none cursor-grab'
                        ].join(' ')}
                        onMouseDown={handleMouseDown}
                    >
                        {message}
                    </div>
                </div>
            )}
        </>
    );
};

export default Toast;
