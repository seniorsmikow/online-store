import {registrationAPI, loginAPI, checkAPI} from '../axios/userAPI'
import { InferActionsTypes, BaseThunkType } from './store'

type InitialStateType = {
    isAuth: boolean
    isReg: boolean
    user: any
    error: string | null
    message: string | null
    isOpenInfoModal: boolean
}

let initialState: InitialStateType = {
    isAuth: false,
    isReg: false,
    user: {},
    error: null,
    message: null,
    isOpenInfoModal: false
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'users/REGISTRATION': 
            return {
                ...state, isReg: action.payload
            }
        case 'users/LOGIN': 
            return {
                ...state, isAuth: true, isReg: true, user: {...action.payload}, message: "Добро пожаловать!"
            }
        case 'users/GET_ERROR':
            return {
                ...state, error: action.payload
            }
        case 'users/LOGOUT': 
            return {
                ...state, isAuth: false, isReg: false, user: {}, message: null, error: null
            }
        case 'users/CHECK_AUTH':
            return {
                ...state, isAuth: true, isReg: true,  user: {...action.payload}, message: null
            }
        case 'users/TOGGLE_INFO_MESSAGE':
            return {
                ...state, isOpenInfoModal: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    login: (payload: any) => ({type: 'users/LOGIN', payload} as const),
    logout: () => ({type: 'users/LOGOUT'} as const),
    registration: (payload: boolean) => ({type: 'users/REGISTRATION', payload} as const),
    getError: (payload: string | null) => ({type: 'users/GET_ERROR', payload} as const),
    check: (payload: any) => ({type: 'users/CHECK_AUTH', payload} as const),
    toggleMessage: (payload: boolean) => ({type: 'users/TOGGLE_INFO_MESSAGE', payload} as const),
}

export const userLogin = (email: string, password: string): ThunkType => {
    return async (dispatch) => {
        try {
            let response = await loginAPI(email, password)
            dispatch(actions.login(response))
        } catch (error) {
            dispatch(actions.getError(error.response.data.message))
        }
        
    };
};

export const userLogout = (): ThunkType => {
    return async(dispatch) => {
        try {
            dispatch(actions.logout)
            localStorage.clear()
        } catch (error) {
            dispatch(actions.getError(error.response.data.message))
        }
    }
}
 
export const userRegistration = (email: string, password: string, name: string): ThunkType => {
    return async(dispatch) => {
        await registrationAPI(email, password, name)
        dispatch(actions.registration(true))
    }
}

export const checkUserAuth = (): ThunkType => {
    return async(dispatch) => {
        try {
            let response = await checkAPI()
            dispatch(actions.check(response))
        } catch (error) {
            dispatch(actions.getError(error.response.data.message))
        }
    }
}

export const toggleInfoMessage = (isOpen: boolean, error: string | null): ThunkType => {
    return async(dispatch) => {
        dispatch(actions.toggleMessage(isOpen))
        dispatch(actions.getError(error))
    }
}
 
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default usersReducer