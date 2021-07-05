import {$host, $authHost} from './axios'
import {brandsType} from '../types/types'


type Brand = {
    name: string
}
type Brands = Array<brandsType>

export const fetchAllBrandsAPI = async() => {
    let {data} = await $host.get<Brands>('/brand')
    return data
}

export const createBrandAPI = async(brand: string) => {
    let {data} = await $authHost.post<Brand>('/brand', brand)
    return data
}