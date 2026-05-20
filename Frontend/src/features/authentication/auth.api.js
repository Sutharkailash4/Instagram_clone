import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/auth",
    withCredentials : true
})

export const registerApiCall = async ({
    username,
    email,
    password,
    bio,
    profile_image
}) => {

    const response = await api.post(
        "/register",
        {
            username,
            email,
            password,
            bio,
            profile_image
        }
    )

    return response.data
}

export const loginApiCall = async ({
    username,
    password
}) => {

    const response = await api.post(
        "/login",
        {
            username,
            password
        }
    )

    return response.data
}

export const getMeApiCall = async () => {

    const response = await api.get(
        "/get-me"
    )

    return response.data
}

export const logoutApiCall = async () => {

    const response = await api.post(
        "/logout"
    )

    return response.data
}