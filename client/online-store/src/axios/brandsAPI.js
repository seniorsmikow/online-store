import {$host} from './axios'

export const fetchAllBrandsAPI = async() => {
    const {data} = await $host.get('/brand');
    return data;
};