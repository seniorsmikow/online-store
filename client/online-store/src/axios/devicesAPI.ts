import {$host, $authHost} from './axios'
import {devicesType} from '../types/types'

export const fetchAllDevicesAPI = async(typeId: number, limit: number, page: number) => {
    const {data} = await $host.get(`/device?typeId=${typeId}&limit=${limit}&page=${page}`)
    return data
};

export const createDeviceAPI = async(device: devicesType) => {
    const {data} = await $authHost.post('/device', device)
    return data
};

export const fetchOneDeviceAPI = async(id: number) => {
    const {data} = await $host.get('/device/' + id)
    return data
};