import React, { FC, useContext } from 'react';
import { UserContext } from './page';

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
}
// interface IProfileProps {
//     data: IUser;
// }

const Profile: FC = () => {
    const user = useContext(UserContext);

    return (
        <div className='w-[500px] mx-auto'>
            <div className='mt-10 bg-red-300 p-5 rounded-md text-xl'>
                <div className='text-center font-bold text-2xl mb-5'>My Profile</div>
                <div>firstname: {user.firstname}</div>
                <div>lastname: {user.lastname}</div>
                <div>email: {user.email}</div>
            </div>
        </div>
    );
};

export default Profile;
