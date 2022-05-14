import axios from 'axios';

const url = 'https://localhost:7021/login';

export function Login(userData) {
    const result = axios.post(url, userData).then((response) => {
        return response;
    })
    
    return result;
}