import {$host, $authHost} from './axios'

type AllTypes = {
    id: number
    name: string

}
type OneType = {
    name: string
}
type Types = Array<AllTypes>

export const fetchAllTypes = async() => {
    let {data} = await $host.get<Types>('/type')
    return data
}

export const createTypeAPI = async(type: string) => {
    debugger
    let {data} = await $authHost.post<OneType>('/type', type)
    return data
}