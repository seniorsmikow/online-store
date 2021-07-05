import {$host, $authHost} from './axios'
import {devicesType} from '../types/types'

type Devices = {
    id: number
    name: string
    price: number
    brandId: number
    typeId: number
    rating: number
    img: string
    info?: Array<string>
}

type fetchAllDevices = {
    count: number
    rows: Array<Devices>
}

export const fetchAllDevicesAPI = async(typeId: number, limit: number, page: number) => {
    const {data} = await $host.get<fetchAllDevices>(`/device?typeId=${typeId}&limit=${limit}&page=${page}`)
    return data
};

export const createDeviceAPI = async(device: devicesType) => {
    const {data} = await $authHost.post<Devices>('/device', device)
    console.log('createDeviceAPI', data)
    return data
};

export const fetchOneDeviceAPI = async(id: number) => {
    const {data} = await $host.get<Devices>('/device/' + id)
    return data
};