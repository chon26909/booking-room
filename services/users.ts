import axios from 'axios';
import ENDPOINTS from './api';

export const getAllUser = async () => {
    console.log('ENDPOINTS.USER_LIST', ENDPOINTS.USER_LIST);

    try {
        const { data } = await axios.get(ENDPOINTS.USER_LIST);
        return data;
    } catch (error) {
        console.log(error);
    }
};
