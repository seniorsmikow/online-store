import {$host, $authHost} from './axios';

export const fetchAllDevicesAPI = async() => {
    const {data} = await $host.get('/device');
    return data;
};

export const createDeviceAPI = async(device) => {
    const {data} = await $authHost.post('/device', device);
    return data;
};

export const fetchOneDeviceAPI = async(path) => {
    const {data} = await $host.get(path);
    return data;
};