'use client';
import { FC, useEffect, useRef, useState } from 'react';
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

    const [open, setOpen] = useState(false);

    const ref = useRef(null);

    const handleDrag = (event: DraggableEvent) => {
        console.log(ref.current);

        if (event) {
            console.log('event', event);
        }
    };

    useEffect(() => {
        if (open) {
            console.log('if open', open);

            setTimeout(() => {
                setOpen(false);
                console.log('close', open);
            }, 500);
        } else {
            setOpen(isToastOpen);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isToastOpen]);

    return (
        <>
            {open && (
                <div className={`fixed w-full ${toastPositions[position]} bg-slate-500`}>
                    <Draggable ref={ref} axis='y' onDrag={handleDrag}>
                        <div
                            className={[
                                bodyClassName,
                                toastColors[toastType],
                                isToastOpen ? 'translate-y-0' : '-translate-y-52',
                                'transition duration-300 mx-auto mt-5 rounded-lg text-white text-lg font-bold select-none'
                            ].join(' ')}
                        >
                            {message}
                        </div>
                    </Draggable>
                </div>
            )}
        </>
    );
};

export default Toast;
