import {$host, $authHost} from './axios'

export const fetchAllBrandsAPI = async() => {
    const {data} = await $host.get('/brand')
    return data
}

export const createBrandAPI = async(brand: string) => {
    const {data} = await $authHost.post('/brand', brand)
    return data
}