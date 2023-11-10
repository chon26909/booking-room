'use client';

import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';

interface ILoginRequest {
    username: string;
    password: string;
}

const FormLogin = () => {
    const { mutate } = useMutation({
        mutationFn: (body: ILoginRequest) => login(body),
        onSuccess(data) {
            console.log('data', data);
        }
    });

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const login = (body: ILoginRequest) => {
        return axios.post('https://dummyjson.com/auth/login', body);
    };

    const handleSubmit = () => {
        console.log('handleSubmit');

        const data = {
            username: usernameRef.current?.value || '',
            password: passwordRef.current?.value || ''
        };

        mutate(data);
    };

    return (
        <div className='bg-blue-300 min-h-screen flex justify-center items-center'>
            <div className='bg-white p-7 w-[500px]  rounded-md'>
                <div className='text-3xl font-bold text-center my-5'>Login </div>
                <Input ref={usernameRef} type='text' label='Username' variant='bordered' className='w-full my-5' defaultValue='kminchelle' />
                <Input ref={passwordRef} type='password' label='Password' variant='bordered' className='w-full my-5' defaultValue='0lelplR' />
                <Button fullWidth onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default FormLogin;
