import { InitialStateType, DevicesActionTypes, DevicesActons} from '../../types/devices'

const initialState: InitialStateType = {
    devices: [],
    isLoading: false,
    error: null,
    page: 1, 
    limit: 10
}

export const deviceReducer = (state = initialState, action: DevicesActons): InitialStateType => {
    switch (action.type) {
        case DevicesActionTypes.FETCH_DEVICES:
            return {
                ...state, isLoading: true
            }
        case DevicesActionTypes.FETCH_DEVICES_SUCCESS: 
            return {
                ...state, isLoading: false, devices: action.payload
            }
        case DevicesActionTypes.FETCH_DEVICES_ERROR:
            return {
                ...state, isLoading: false, error: action.payload
            }
        case DevicesActionTypes.CHANGE_DEVICES_PAGE: 
            return {
                ...state, page: action.payload
            }
        default:
            return state
    }
}