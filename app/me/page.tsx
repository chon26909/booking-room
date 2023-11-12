'use client';

import React, { createContext, useEffect, useState } from 'react';
import FormLogin from './FormLogin';
import Profile, { IUser } from './Profile';
import axios from 'axios';

const initialState = {
    firstname: '',
    lastname: '',
    email: ''
};

export const UserContext = createContext(initialState);

const ProfilePage = () => {
    const [accessToken, setAccessToken] = useState('');

    const [userData, setUserData] = useState<IUser>(initialState);

    useEffect(() => {
        const getUserProfile = async () => {
            const { data } = await axios.get('http://localhost:4000/auth/me', {
                headers: {
                    authorization: 'Bearer ' + accessToken
                }
            });
            console.log('user profile', data);
            setUserData(data.data);
        };

        if (accessToken) {
            getUserProfile();
        }
    }, [accessToken]);

    return (
        <UserContext.Provider value={userData}>
            {accessToken ? <Profile /> : <FormLogin setAccessToken={setAccessToken} />}
        </UserContext.Provider>
    );
};

export default ProfilePage;
