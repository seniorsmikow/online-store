import { InferActionsTypes, BaseThunkType } from './store'
import {fetchAllDevicesAPI} from '../axios/devicesAPI'
import {devicesType} from '../types/types'

type InitialStateType = {
    isLoad: boolean
    devices: Array<devicesType>
}

const initialState: InitialStateType = {
    isLoad: false,
    devices: []
}

const devicesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'devices/FETCH_ALL_DEVICES':
            return {
                ...state, devices: [...action.payload]
            }
        default:
            return state
    }
}

const actions = {
    fetchALLDevicesAction: (payload: Array<devicesType>) => ({type: 'devices/FETCH_ALL_DEVICES', payload} as const)
}

export const fetchAllDevices = (): ThunkType => {
    return async(dispatch) => {
        let response = await fetchAllDevicesAPI()
        dispatch(actions.fetchALLDevicesAction(response.rows))
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default devicesReducer