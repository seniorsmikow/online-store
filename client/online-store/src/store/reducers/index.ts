import { deviceReducer } from './deviceReducer';
import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
    devices: deviceReducer,
})

export type RootState = ReturnType<typeof rootReducer>