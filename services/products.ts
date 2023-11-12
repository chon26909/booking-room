import { IResponse } from '@/types/common';
import http from './axios';
import { IProduct } from '@/types/product';

export const getProducts = async () => {
    // console.log('get products');

    try {
        const { data } = await http.get<IResponse<IProduct[]>>(`/products`);

        await new Promise((resolve) => setTimeout(resolve, 3000));
        return data;
    } catch (error) {
        console.log('error', error);
    }
};
