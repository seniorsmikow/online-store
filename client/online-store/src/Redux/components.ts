import { InferActionsTypes, BaseThunkType } from './store'


type InitialStateType = {
    isModalOpen: boolean
}

let initialState: InitialStateType = {
    isModalOpen: false
}

const componentsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'conponents/TOGGLE_MODAL_WINDOW':
            return {
                ...state, isModalOpen: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    toggleModalWindow: (payload: boolean) => ({type: 'conponents/TOGGLE_MODAL_WINDOW', payload} as const)
}

export const toggleModalWindowOpen = (isOpen: boolean): ThunkType => {
    return async(dispatch) => {

        debugger
        dispatch(actions.toggleModalWindow(isOpen))
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default componentsReducer