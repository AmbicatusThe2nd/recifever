import axios from 'axios';

const url = 'This is a place holder url';

export function getAllRecipes() {
    const result = axios.get(url).then((response) => {
        return response.data;
    })

    return result;
}

export function getSpecificRecipe(id) {
    const result = axios.get(`${url}/${id}`).then((response) => {
        return response.data;
    })

    return result;
}

export function addRecipe(userDetails) {
    const result = axios.post(url, userDetails).then((response) => {
        return response;
    })

    return result;
}

export function updateRecipe(id, userDetails) {
    const result = axios.put(`${url}/${id}`, userDetails).then((response) => {
        return response;
    })

    return result;
}

export function deleteRecipe(id) {
    const result = axios.delete(`${url}/${id}`).then((response) => {
        return response.data;
    })

    return result;
}