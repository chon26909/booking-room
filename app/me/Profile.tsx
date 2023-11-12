import React, { FC } from 'react';

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
}
interface IProfileProps {
    data: IUser;
}

const Profile: FC<IProfileProps> = (props) => {
    const {
        data: { firstname, lastname, email }
    } = props;

    return (
        <div className='w-[500px] mx-auto'>
            <div className='mt-10 bg-red-300 p-5 rounded-md text-xl'>
                <div className='text-center font-bold text-2xl mb-5'>My Profile</div>
                <div>firstname: {firstname}</div>
                <div>lastname: {lastname}</div>
                <div>email: {email}</div>
            </div>
        </div>
    );
};

export default Profile;
