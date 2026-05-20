import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/user",
    withCredentials : true
})

export const getProfileApiCall = async ({
    userId
}) => {

    const response = await api.get(
        `/profile/${userId}`
    )

    return response.data
}

export const updateProfileApiCall = async ({
    username,
    bio,
    profile_image
}) => {

    const formData = new FormData()

    formData.append("username", username)

    formData.append("bio", bio)

    formData.append("profile_image", profile_image)

    const response = await api.put(
        "/update-profile",
        formData
    )

    return response.data
}