import { create } from 'zustand';

type Position = 'topCenter' | 'bottomCenter' | 'topRight' | 'bottomRight';
type ToastType = 'success' | 'error' | 'warning';
type Direction = 'fadeUp' | 'fadeLeft';

type ToastList = {
    id: string;
    message: string;
};

type ToastState = {
    isToastOpen: boolean;
    closeToast: () => void;
    message: string;
    toastType: ToastType;
    position: Position;
    direction: Direction;
    duration: number;
    toast: {
        success: (message: string, duration?: number, position?: Position, direction?: Direction) => void;
        error: (message: string, position?: Position, direction?: Direction) => void;
        warning: (message: string, position?: Position, direction?: Direction) => void;
        close: () => void;
    };
};

export const useToastStore = create<ToastState>()((set) => ({
    isToastOpen: false,
    closeToast: () => set(() => ({ isToastOpen: false })),
    message: '',
    toastType: 'success',
    position: 'topCenter',
    direction: 'fadeUp',
    duration: 3000,
    toast: {
        success: (message, duration?, position?, direction?) => {
            set((state) => {
                setTimeout(() => {
                    state.closeToast();
                }, duration);

                return {
                    isToastOpen: true,
                    toastType: 'success',
                    message,
                    position: position ?? state.position,
                    direction: direction ?? state.direction,
                    duration: duration ?? state.duration
                };
            });
        },
        error: (message, position?, direction?) =>
            set((state) => ({
                isToastOpen: true,
                toastType: 'error',
                message,
                position: position ?? state.position,
                direction: direction ?? state.direction
            })),
        warning: (message, position?, direction?) =>
            set((state) => ({
                isToastOpen: true,
                toastType: 'warning',
                message,
                position: position ?? state.position,
                direction: direction ?? state.direction
            })),
        close: () => {
            set(() => {
                return {
                    isToastOpen: false
                };
            });
        }
    }
}));
