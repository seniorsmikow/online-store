import {$host, $authHost} from './axios';

export const fetchAllDevicesAPI = async(typeId, limit, page) => {
    const {data} = await $host.get(`/device?typeId=${typeId}&limit=${limit}&page=${page}`);
    return data;
};

export const createDeviceAPI = async(device) => {
    debugger
    const {data} = await $authHost.post('/device', device);
    return data;
};

export const fetchOneDeviceAPI = async(id) => {
    const {data} = await $host.get('/device/' + id);
    return data;
};