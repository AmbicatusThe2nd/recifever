import axios from 'axios';

const url = 'This is a place holder url';

export function getAllUsers() {
    const result = axios.get(url).then((response) => {
        return response.data;
    })

    return result;
}

export function getSpecificUser(id) {
    // TODO: Implement
}

export function addUser(userDetails) {
    // TODO: Implement
}

export function updateUser(userDetails) {
    // TODO: Implement
}

export function deleteUser(id) {
    // TODO: Implement
}