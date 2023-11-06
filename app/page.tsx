'use client';

import Toast from '@/components/Toast';
import { useToastStore } from '@/store/toast';
import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

export default function Home() {
    const { toast } = useToastStore();

    return (
        <main>
            <Button onClick={() => toast.success('Update Successfully')}>show toast</Button>
            <Toast bodyClassName='p-5 w-[500px]' />
        </main>
    );
}
