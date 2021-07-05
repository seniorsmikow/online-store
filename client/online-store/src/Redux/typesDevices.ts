import {typeOfDevice} from '../types/types'
import {fetchAllTypes, createTypeAPI} from '../axios/typesAPI'
import { InferActionsTypes, BaseThunkType } from './store'


type InitialStateType = {
    isLoad: boolean,
    typesOfDevices: Array<typeOfDevice> 
    activeType: number 
    error: string | null
    message: string | null
}

let initialState: InitialStateType = {
    isLoad: false,
    typesOfDevices: [],
    activeType: 0,
    error: null,
    message: null
}

const typesDevicesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'typesDevices/FETCH_TYPES':
            return {
                ...state, typesOfDevices: action.payload
            }
        case 'typesDevices/ACTIVE': 
            return {
                ...state, activeType: action.payload
            }
        case 'typesDevices/GET_ERROR':
            return {
                ...state, error: action.payload
            }
        case 'typesDevices/SUCCESS_RESPONSE': 
            return {
                ...state, message: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    fetchTypes: (payload: any) => ({type: 'typesDevices/FETCH_TYPES', payload} as const),
    create: (payload: string) => ({type: 'typesDevices/CREATE_TYPE', payload} as const),
    active: (payload: number) => ({type: 'typesDevices/ACTIVE', payload} as const),
    getError: (payload: string) => ({type: 'typesDevices/GET_ERROR', payload} as const),
    successResponse: (payload: string) => ({type: 'typesDevices/SUCCESS_RESPONSE', payload} as const)
}

export const fetchTypesDevices = (): ThunkType => {
    return async(dispatch) => {
        let response = await fetchAllTypes()
        dispatch(actions.fetchTypes(response));
    }
}

export const createType = (type: string): ThunkType => {
    return async (dispatch) => {
        try {
            let response = await createTypeAPI(type)
            dispatch(actions.successResponse(response.name))
        } catch (error) {
            dispatch(actions.getError(error.response.data.message))
        }
    }
}

export const changeActiveType = (type: number): ThunkType => {
    return async(dispatch) => {
        dispatch(actions.active(type))
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default typesDevicesReducer