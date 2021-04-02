import {$host} from './axios';

export const fetchAllDevicesAPI = async() => {
    const {data} = await $host.get('/device');
    return data;
};