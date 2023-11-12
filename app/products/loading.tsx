import Spinner from '@/components/spinner/Spinner';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-screen items-center justify-center flex-col'>
            <Spinner />
            <div>loading page...</div>
        </div>
    );
};

export default Loading;
