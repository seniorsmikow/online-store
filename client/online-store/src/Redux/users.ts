import {registrationAPI, loginAPI, checkAPI} from '../axios/userAPI'
import { InferActionsTypes, BaseThunkType } from './store'

type InitialStateType = {
    isAuth: boolean
    isReg: boolean
    user: any
}

let initialState: InitialStateType = {
    isAuth: false,
    isReg: false,
    user: {}
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'users/REGISTRATION': 
            return {
                ...state, isReg: action.payload
            }
        case 'users/LOGIN': 
            return {
                ...state, isAuth: true, user: {...action.payload}
            }
        default:
            return state
    }
}

export const actions = {
    login: (payload: any) => ({type: 'users/LOGIN', payload} as const),
    registration: (payload: boolean) => ({type: 'users/REGISTRATION', payload} as const),
}

export const userLogin = (email: string, password: string): ThunkType => {
    return async (dispatch) => {
        let response = await loginAPI(email, password);
        dispatch(actions.login(response));
    };
};

export const userRegistration = (email: string, password: string): ThunkType => {
    return async(dispatch) => {
        let response =  await registrationAPI(email, password);
        debugger
        dispatch(actions.registration(true))
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default usersReducer