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
    // TODO: Implement
}

export function updateUser(id, userDetails) {
    // TODO: Implement
}

export function deleteUser(id) {
    // TODO: Implement
}