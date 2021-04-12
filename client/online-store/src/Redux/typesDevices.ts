import {typeOfDevice} from '../types/types'
import {fetchAllTypes, createTypeAPI} from '../axios/typesAPI'
import { InferActionsTypes, BaseThunkType } from './store'


type InitialStateType = {
    isLoad: boolean,
    typesOfDevices: Array<typeOfDevice> 
}

let initialState: InitialStateType = {
    isLoad: false,
    typesOfDevices: []
}

const typesDevicesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'typesDevices/FETCH_TYPES':
            return {
                ...state, typesOfDevices: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    fetchTypes: (payload: any) => ({type: 'typesDevices/FETCH_TYPES', payload} as const),
    create: (payload: string) => ({type: 'typesDevices/CREATE_TYPE', payload} as const)
}

export const fetchTypesDevices = (): ThunkType => {
    return async(dispatch) => {
        let response = await fetchAllTypes()
        dispatch(actions.fetchTypes(response));
    }
}

export const createType = (type: string): ThunkType => {
    return async(dispatch) => {
        let response = await createTypeAPI(type)
        dispatch(actions.create(response));
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default typesDevicesReducer