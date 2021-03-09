export enum DevicesActionTypes {
    FETCH_DEVICES = 'FETCH_DEVICES',
    FETCH_DEVICES_SUCCESS = 'FETCH_DEVICES_SUCCESS',
    FETCH_DEVICES_ERROR = 'FETCH_DEVICES_ERROR',
    CHANGE_DEVICES_PAGE = 'CHANGE_DEVICES_PAGE'
}

export interface InitialStateType {
    devices: any[]
    isLoading: boolean
    error: string | null
    page: number
    limit: number
}

interface FetchDevices {
    type: DevicesActionTypes.FETCH_DEVICES
}

interface FetchDevicesSuccess {
    type: DevicesActionTypes.FETCH_DEVICES_SUCCESS
    payload: any[]
}

interface FetchDevicesError {
    type: DevicesActionTypes.FETCH_DEVICES_ERROR
    payload: string
}

interface ChangeDevicesPage {
    type: DevicesActionTypes.CHANGE_DEVICES_PAGE
    payload: number
}

export type DevicesActons = FetchDevices | FetchDevicesSuccess | FetchDevicesError | ChangeDevicesPage
