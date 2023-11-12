import Spinner from '@/components/spinner/Spinner';
import React from 'react';

const Loading = () => {
    return (
        <div className='bg-slate-600 flex justify-center'>
            <Spinner />
        </div>
    );
};

export default Loading;
