'use client';

import Toast from '@/components/Toast';
import { useToastStore } from '@/store/toast';
import { Button } from '@nextui-org/react';

export default function Home() {
    const { toast } = useToastStore();

    return (
        <main>
            <Button
                className='mt-52'
                onClick={() => toast.success('Update Successfully', { duration: 10000 })}
            >
                show toast
            </Button>
            <Toast bodyClassName='p-5 w-[500px]' />
        </main>
    );
}
