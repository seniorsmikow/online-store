import { InferActionsTypes, BaseThunkType } from './store'
import {fetchAllDevicesAPI, createDeviceAPI, fetchOneDeviceAPI} from '../axios/devicesAPI'
import {devicesType} from '../types/types'

type InitialStateType = {
    isLoad: boolean
    devices: Array<devicesType>
    device: devicesType | null
    limitDevices: number
    currentPageDevices: number
    count: number
    errorMessage: string | null
}

const initialState: InitialStateType = {
    isLoad: false,
    devices: [],
    device: null, 
    limitDevices: 100,
    currentPageDevices: 1,
    count: 0,
    errorMessage: null
}

const devicesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'devices/FETCH_ALL_DEVICES':
            return {
                ...state, devices: [...action.payload]
            }
        case 'devices/FETCH_ONE_DEVICE':
            return {
                ...state, device: action.payload
            }
        case 'devices/CHANGE_CURRENT_PAGE': 
            return {
                ...state, currentPageDevices: action.payload
            }
        case 'devices/SET_COUNT': 
            return {
                ...state, count: action.payload
            }
        case 'devices/CATCH_ERROR':
            return {
                ...state, errorMessage: action.payload
            }
        default:
            return state
    }
}

const actions = {
    fetchALLDevicesAction: (payload: Array<devicesType>) => ({type: 'devices/FETCH_ALL_DEVICES', payload} as const),
    createDeviceAction: (payload: devicesType) => ({type: 'devices/CREATE_DEVICE', payload} as const),
    fetchOneDeviceAction: (payload: devicesType) => ({type: 'devices/FETCH_ONE_DEVICE', payload} as const),
    changePage: (payload: number) => ({type: 'devices/CHANGE_CURRENT_PAGE', payload} as const),
    setCount: (payload: number) => ({type: 'devices/SET_COUNT', payload} as const),
    catchError: (payload: string) => ({type: 'devices/CATCH_ERROR', payload} as const)
}

export const fetchAllDevices = (typeId: number, limit: number, page: number): ThunkType => {
    return async(dispatch) => {
        let response = await fetchAllDevicesAPI(typeId, limit, page)
        dispatch(actions.fetchALLDevicesAction(response.rows))
        dispatch(actions.setCount(response.count))
    }
}

export const createDevice = (payload: any): ThunkType => {

    debugger
    return async(dispatch) => {
        try {
            let response = await createDeviceAPI(payload)
            dispatch(actions.createDeviceAction(response))
        } catch (error) {
            dispatch(actions.catchError(error.response.data.message))
        }
        
    }
}

export const fetchOneDevice = (payload: any): ThunkType => {
    return async(dispatch) => {
        let response = await fetchOneDeviceAPI(+payload.deviceId)
        dispatch(actions.fetchOneDeviceAction(response))
    }
}

export const changeCurrentPage = (payload: number): ThunkType => {
    return async(dispatch) => {
        dispatch(actions.changePage(payload))
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default devicesReducer