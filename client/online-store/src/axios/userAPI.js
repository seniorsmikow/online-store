import {$host, $authHost} from './axios';
import jwt_decode from 'jwt-decode';

export const registrationAPI = async(email, password) => {
    const {data} = await $host.post('/user/registration', {email, password, role: 'ADMIN'});
    return jwt_decode(data.token);
};

export const loginAPI = async(email, password) => {
    const {data} = await $host.post('/user/login', {email, password});
    debugger
    let a = jwt_decode(data.token);
    
    console.log(a);
    return a;
};

export const checkAPI = async() => {
    const response = await $host.get('/user/auth');
    return response;
};