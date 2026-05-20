import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/user",
    withCredentials : true
})

export const followUserApiCall = async ({
    userId
}) => {

    const response = await api.post(
        `/follow/${userId}`
    )

    return response.data
}

export const unFollowUserApiCall = async ({
    userId
}) => {

    const response = await api.post(
        `/unFollow/${userId}`
    )

    return response.data
}