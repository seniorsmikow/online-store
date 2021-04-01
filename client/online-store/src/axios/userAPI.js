import {$host, $authHost} from './axios';
import jwt_decode from 'jwt-decode';

export const registrationAPI = async(email, password, name) => {
    const {data} = await $host.post('/user/registration', {email, password, role: 'USER', name});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const loginAPI = async(email, password) => {
    const {data} = await $host.post('/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const checkAPI = async() => {
    const {data} = await $authHost.get('/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};