import {$host, $authHost} from './axios'

export const fetchAllTypes = async() => {
    let {data} = await $host.get('/type');
    return data;
};

export const createTypeAPI = async(type) => {
    let {data} = await $authHost.post('/type', type);
    return data;
}