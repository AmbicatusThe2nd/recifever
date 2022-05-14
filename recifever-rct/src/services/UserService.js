import axios from 'axios';

const url = 'This is a place holder url';

export function getAllUsers() {
    const result = axios.get(url).then((response) => {
        return response.data;
    })

    return result;
}

export function getSpecificUser(id) {
    const result = axios.get(`${url}/${id}`).then((response) => {
        return response.data;
    })

    return result;
}

export function addUser(userDetails) {
    const result = axios.post(url, userDetails).then((response) => {
        return response;
    })

    return result;
}

export function updateUser(id, userDetails) {
    const result = axios.put(`${url}/${id}`, userDetails).then((response) => {
        return response;
    })

    return result;
}

export function deleteUser(id) {
    const result = axios.delete(`${url}/${id}`).then((response) => {
        return response.data;
    })

    return result;
}