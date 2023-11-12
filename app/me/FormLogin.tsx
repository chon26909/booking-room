'use client';

import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';

interface ILoginRequest {
    email: string;
    password: string;
}

interface IFormLoginProps {
    setAccessToken(token: string): void;
}

const FormLogin = (props: IFormLoginProps) => {
    const { mutate } = useMutation({
        mutationFn: (body: ILoginRequest) => login(body),
        onSuccess({ data }) {
            console.log('token', data.data);
            props.setAccessToken(data.data.accessToken);
        }
    });

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const login = (body: ILoginRequest) => {
        return axios.post('http://localhost:4000/auth/login', body);
    };

    const handleSubmit = () => {
        console.log('handleSubmit');

        const data = {
            email: emailRef.current?.value || '',
            password: passwordRef.current?.value || ''
        };

        mutate(data);
    };

    return (
        <div className='bg-blue-300 min-h-screen flex justify-center items-center'>
            <div className='bg-white p-7 w-[500px] rounded-md'>
                <div className='text-3xl font-bold text-center my-5'>Login </div>
                <Input ref={emailRef} type='text' label='Email' variant='bordered' className='w-full my-5' defaultValue='demo@gmail.com' />
                <Input ref={passwordRef} type='password' label='Password' variant='bordered' className='w-full my-5' defaultValue='1234' />
                <Button fullWidth onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default FormLogin;
