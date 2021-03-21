import {getAllBrands} from '../axios/axios'
import { InferActionsTypes, BaseThunkType } from './store'
import {brandsType} from '../types/types'


type InitialStateType = {
    brands: Array<brandsType>
}

let initialState: InitialStateType = {
    brands: []
};


const brandsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'brand/FETCH_ALL_BRANDS':
            return {
                ...state, brands: [...action.payload]
            };
        default:
            return state;
    }
};

export const actions = {
    fetchBrands: (payload: any) => ({type: 'brand/FETCH_ALL_BRANDS', payload} as const),
}

export const fetchAllBrands = (): ThunkType => {

    return async (dispatch) => {

        let response = await getAllBrands();
        dispatch(actions.fetchBrands(response.data));
    };

};

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default brandsReducer;