import { getAllUser } from '@/services/users';
import React from 'react';

const page = async () => {
    const res = await getAllUser();

    console.log(res);

    return <div>page</div>;
};

export default page;
