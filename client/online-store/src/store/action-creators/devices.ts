import { DevicesActionTypes, DevicesActons } from '../../types/devices'
import { Dispatch } from 'redux'
import axios from 'axios'


export const fetchDevices = (page = 1, limit = 10) => {
    return async(dispatch: Dispatch<DevicesActons>) => {
        try {
            dispatch({type: DevicesActionTypes.FETCH_DEVICES})

            const response = await (await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {_page: page, _limit: limit}
            })).data

            dispatch({type: DevicesActionTypes.FETCH_DEVICES_SUCCESS, payload: response})

        } catch (error) {
            dispatch({type: DevicesActionTypes.FETCH_DEVICES_ERROR, payload: 'Произошла ошибка при загрузке данных'})
        }
    }
}

export const changeDevicesPage = (page: number): DevicesActons => {
    return {type: DevicesActionTypes.CHANGE_DEVICES_PAGE, payload: page}
}