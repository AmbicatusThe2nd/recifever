import { useState } from "react";

export default function useToken() {
    const getToken = () => {
        return JSON.parse(localStorage.getItem('token'))?.token;
    };

    const [token, setToken] = useState();

    const saveToken = sessionToken => {
        localStorage.setItem('token', JSON.stringify(sessionToken));
        setToken(sessionToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}