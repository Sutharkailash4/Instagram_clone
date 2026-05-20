import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/user",
    withCredentials : true
})

export const likePostApiCall = async ({
    postId
}) => {

    const response = await api.post(
        `/like/${postId}`
    )

    return response.data
}

export const unLikePostApiCall = async ({
    postId
}) => {

    const response = await api.post(
        `/unLike/${postId}`
    )

    return response.data
}