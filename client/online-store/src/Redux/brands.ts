import {fetchAllBrandsAPI, createBrandAPI} from '../axios/brandsAPI'
import { InferActionsTypes, BaseThunkType } from './store'
import {brandsType} from '../types/types'


type InitialStateType = {
    brands: Array<brandsType>
    brand: string | null
}

let initialState: InitialStateType = {
    brands: [],
    brand: null
};


const brandsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'brand/FETCH_ALL_BRANDS':
            return {
                ...state, brands: action.payload
            }
        case 'brand/CREATE_BRAND': 
            return {
                ...state, brand: action.payload
            }
        default:
            return state
    }
};

export const actions = {
    fetchBrands: (payload: Array<brandsType>) => ({type: 'brand/FETCH_ALL_BRANDS', payload} as const),
    create: (payload: string) => ({type: 'brand/CREATE_BRAND', payload} as const)
}

export const fetchAllBrands = (): ThunkType => {
    return async (dispatch) => {
        let response = await fetchAllBrandsAPI()
        dispatch(actions.fetchBrands(response))
    };
};

export const createBrand = (brand: string): ThunkType => {

    debugger
    return async (dispatch) => {
        await createBrandAPI(brand)
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default brandsReducer