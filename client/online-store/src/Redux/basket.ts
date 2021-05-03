import { InferActionsTypes, BaseThunkType } from './store'
import {devicesType} from '../types/types'
import {fetchAllDevicesAPI, createDeviceAPI, fetchOneDeviceAPI} from '../axios/devicesAPI'


type InitialStateType = {
    device: devicesType | null
    deviceCount: number
    devicesId: Array<number>
}

const initialState: InitialStateType = {
    device: null,
    deviceCount: 0,
    devicesId: []
}

const basketReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'basket/INCREMENT_COUNT':
            return {
                ...state, deviceCount: action.payload
            }
        case 'basket/ADD_TO_BASKET':
            return {
                ...state, devicesId: [...state.devicesId, action.payload]
            }
        case 'devices/FETCH_ONE_DEVICE':
            return {
                ...state, device: action.payload
            }
        default:
            return state
    }
}

const actions = {
    incrCount: (payload: number) => ({type: 'basket/INCREMENT_COUNT', payload} as const),
    addBasket: (payload: number) => ({type: 'basket/ADD_TO_BASKET', payload} as const),
    fetchOneDeviceAction: (payload: devicesType) => ({type: 'devices/FETCH_ONE_DEVICE', payload} as const)
}

export const incrementDeviceCount = (count: number): ThunkType => {
    return async(dispatch) => {
        dispatch(actions.incrCount(count))
    }
}

export const addDeviceId = (id: number): ThunkType => {
    return async(dispatch) => {
        dispatch(actions.addBasket(id))
    }
}

export const fetchOneDevice = (payload: any): ThunkType => {
    return async(dispatch) => {
        let response = await fetchOneDeviceAPI(+payload.deviceId)
        dispatch(actions.fetchOneDeviceAction(response))
    }
}



type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default basketReducer