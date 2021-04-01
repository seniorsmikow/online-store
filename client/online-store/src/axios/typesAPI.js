import {$host} from './axios'

export const fetchAllTypes = async() => {
    let {data} = await $host.get('/type');
    return data;
};