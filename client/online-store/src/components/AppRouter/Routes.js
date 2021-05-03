import AdminPanel from '../../Pages/AdminPanel/AdminPanel';
import Smartphones from '../../Pages/Products/Smartphones';
import VideoGames from '../../Pages/Products/Videogames';
import Watches from '../../Pages/Products/Watches';
import Main from '../../Pages/Main/Main';
import Device from '../../Pages/Device/Device';
import Basket from '../Basket/Basket'
import {
    ADMIN_ROUTE,
    SHOP_MAIN_ROUTE,
    DEVICE_ROUTE,
    SMARTPHONES_ROUTE,
    WATCHES_ROUTE,
    VIDEOGAMES_ROUTE,
    BASKET_ROUTE
} from './constants.js';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    // {
    //     path: BASKET_ROUTE,
    //     Component: Basket
    // }
];

export const publicRoutes = [
    {
        path: SMARTPHONES_ROUTE,
        Component: Smartphones
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: VIDEOGAMES_ROUTE,
        Component: VideoGames
    },
    {
        path: WATCHES_ROUTE,
        Component: Watches
    },
    {
        path: SHOP_MAIN_ROUTE,
        Component: Main
    },
    {
        path: DEVICE_ROUTE,
        Component: Device
    }
];